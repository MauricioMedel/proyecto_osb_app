import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

interface Level {
  id: string;
  levelNumber: number;
  title: string;
  description: string;
  status: 'completed' | 'unlocked' | 'locked';
  points: number;
  icon: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

@Component({
  selector: 'app-jugar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './jugar.component.html',
  styleUrl: './jugar.component.scss'
})
export class JugarComponent implements OnInit, OnDestroy {
  childName = 'Campeón';
  childId = '';

  loading = true;
  loadingQuiz = false;
  savingResult = false;
  resultSaved = false;

  errorMessage = '';
  feedbackMessage = '';
  answerFeedback = '';

  levels: Level[] = [];
  selectedLevel: Level | null = null;

  quiz: QuizQuestion[] = [];
  currentQuestionIndex = 0;
  selectedAnswer = '';
  isAnswerRevealed = false;

  score = 0;
  quizFinished = false;
  passedLevel = false;
  selectedTopic = 'nutrition';

  readonly maxLives = 3;
  readonly hearts = [1, 2, 3];

  lives = this.maxLives;
  lostAllLives = false;

  showTrophyModal = false;

  newTrophy = {
    title: '',
    description: '',
    icon: ''
  };

  private answerTimer: ReturnType<typeof setTimeout> | null = null;
  private feedbackTimer: ReturnType<typeof setTimeout> | null = null;

  private quizRequest: Subscription | null = null;
  private levelsRequest: Subscription | null = null;
  private resultRequest: Subscription | null = null;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const user = this.auth.getCurrentUser();

    this.childName = user?.username || 'Campeón';
    this.childId = user?.childId || '';

    this.loadLevels();
  }

  ngOnDestroy(): void {
    this.clearAnswerTimer();
    this.clearFeedbackTimer();

    this.quizRequest?.unsubscribe();
    this.levelsRequest?.unsubscribe();
    this.resultRequest?.unsubscribe();
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.auth.getToken()}`
    });
  }

  loadLevels(): void {
    this.levelsRequest?.unsubscribe();

    this.loading = true;
    this.errorMessage = '';

    if (!this.childId) {
      this.loading = false;
      this.errorMessage = 'Inicia sesión con una cuenta de niño.';
      return;
    }

    this.levelsRequest = this.http.get<any>(
      `${environment.apiUrl}/ml/children/${this.childId}/game-progress`,
      { headers: this.getHeaders() }
    ).subscribe({
      next: (res) => {
        const levels = res.data?.levels;

        if (!Array.isArray(levels)) {
          this.levels = [];
          this.loading = false;
          this.errorMessage = 'No se pudo interpretar el mapa de niveles.';
          return;
        }

        this.levels = levels.map((level: Level, index: number) => ({
          ...level,
          icon: this.getLevelIcon(index)
        }));

        this.loading = false;
      },
      error: () => {
        this.levels = [];
        this.loading = false;
        this.errorMessage =
          'No se pudo cargar tu progreso. Intenta nuevamente.';
      }
    });
  }

  getLevelIcon(index: number): string {
    const icons = [
      '🥦',
      '🏃',
      '💧',
      '🍎',
      '🚴',
      '⭐',
      '🥑',
      '🤸',
      '🥕',
      '🏆'
    ];

    return icons[index % icons.length];
  }

  get currentQuestion(): QuizQuestion | null {
    return this.quiz[this.currentQuestionIndex] ?? null;
  }

  openLevel(level: Level): void {
    if (this.savingResult || this.selectedLevel) {
      return;
    }

    this.clearFeedbackTimer();

    if (level.status === 'locked') {
      this.feedbackMessage =
        '🔒 Primero completa el nivel anterior para desbloquear este.';

      this.feedbackTimer = setTimeout(() => {
        this.feedbackMessage = '';
        this.feedbackTimer = null;
      }, 3000);

      return;
    }

    this.selectedLevel = level;
    this.generateQuiz();
  }

  generateQuiz(): void {
    if (!this.childId || !this.selectedLevel || this.savingResult) {
      return;
    }

    this.clearAnswerTimer();
    this.quizRequest?.unsubscribe();

    this.quiz = [];
    this.currentQuestionIndex = 0;
    this.selectedAnswer = '';
    this.isAnswerRevealed = false;

    this.score = 0;
    this.quizFinished = false;
    this.passedLevel = false;
    this.resultSaved = false;

    this.lives = this.maxLives;
    this.lostAllLives = false;

    this.answerFeedback = '';
    this.feedbackMessage = '';
    this.loadingQuiz = true;

    this.quizRequest = this.http.post<any>(
      `${environment.apiUrl}/ml/children/${this.childId}/generate-quiz`,
      {
        topic: this.selectedTopic,
        level: this.selectedLevel.levelNumber
      },
      { headers: this.getHeaders() }
    ).subscribe({
      next: (res) => {
        const quizData = res.data?.quiz || res.data;
        const questions = quizData?.questions;

        this.loadingQuiz = false;

        if (
          !Array.isArray(questions) ||
          questions.length === 0 ||
          !questions.every(question => this.isValidQuestion(question))
        ) {
          this.feedbackMessage =
            'No se pudieron preparar las preguntas. Intenta nuevamente.';
          return;
        }

        this.quiz = questions;
      },
      error: (err) => {
        console.error('Error al generar el quiz:', err);

        this.loadingQuiz = false;
        this.feedbackMessage =
          'No se pudieron cargar las preguntas. Intenta nuevamente.';
      }
    });
  }

  private isValidQuestion(question: any): question is QuizQuestion {
    return (
      question !== null &&
      typeof question === 'object' &&
      typeof question.question === 'string' &&
      question.question.trim().length > 0 &&
      Array.isArray(question.options) &&
      question.options.length > 0 &&
      question.options.every(
        (option: unknown) => typeof option === 'string'
      ) &&
      typeof question.answer === 'string' &&
      question.options.includes(question.answer)
    );
  }

  selectAnswer(option: string): void {
    const question = this.currentQuestion;

    if (
      !question ||
      !question.options.includes(option) ||
      this.loadingQuiz ||
      this.isAnswerRevealed ||
      this.quizFinished ||
      this.savingResult ||
      this.lostAllLives
    ) {
      return;
    }

    this.selectedAnswer = option;
    this.isAnswerRevealed = true;

    if (option === question.answer) {
      this.score++;
      this.answerFeedback = '¡Muy bien! Respuesta correcta';
    } else {
      this.lives = Math.max(0, this.lives - 1);

      this.answerFeedback =
        
        (this.lives === 0
          ? 'Puedes volver a intentarlo.'
          : '¡Sigue intentando!');
    }

    this.answerTimer = setTimeout(() => {
      this.answerTimer = null;

      if (!this.selectedLevel) {
        return;
      }

      this.selectedAnswer = '';
      this.isAnswerRevealed = false;
      this.answerFeedback = '';

      if (this.lives === 0) {
        this.lostAllLives = true;
        this.quizFinished = true;
        this.passedLevel = false;

        this.feedbackMessage =
          'Repasa lo aprendido y vuelve a intentar este nivel.';

        // No se registra un quiz completado si el intento se interrumpe.
        return;
      }

      if (this.currentQuestionIndex < this.quiz.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.finishQuiz();
      }
    }, 1800);
  }

  finishQuiz(): void {
    if (
      !this.childId ||
      !this.selectedLevel ||
      !this.quiz.length ||
      this.savingResult ||
      this.quizFinished ||
      this.lostAllLives
    ) {
      return;
    }

    this.quizFinished = true;
    this.saveQuizResult();
  }

  saveQuizResult(): void {
    if (
      !this.childId ||
      !this.selectedLevel ||
      !this.quiz.length ||
      !this.quizFinished ||
      this.lostAllLives ||
      this.savingResult ||
      this.resultSaved
    ) {
      return;
    }

    this.savingResult = true;
    this.passedLevel = false;
    this.feedbackMessage = 'Guardando resultado...';

    this.resultRequest = this.http.post<any>(
      `${environment.apiUrl}/ml/children/${this.childId}/quiz-result`,
      {
        topic: this.selectedTopic,
        level: this.selectedLevel.levelNumber,
        score: this.score,
        totalQuestions: this.quiz.length
      },
      { headers: this.getHeaders() }
    ).subscribe({
      next: (res) => {
        this.savingResult = false;
        this.resultSaved = true;
        this.passedLevel = res.data.passed === true;

        this.feedbackMessage = this.passedLevel
          ? `🎉 ¡Nivel superado! Ganaste ${res.data.xpEarned} XP.`
          : `Obtuviste ${this.score}/${this.quiz.length}. ` +
            'Necesitas al menos el 80% para avanzar.';

        this.loadLevels();
      },
      error: () => {
        this.savingResult = false;
        this.resultSaved = false;

        this.feedbackMessage =
          'No se pudo guardar el resultado. ' +
          'Pulsa Reintentar guardado para enviar este mismo resultado.';
      }
    });
  }

  retryLevel(): void {
    if (
      !this.selectedLevel ||
      this.savingResult ||
      this.loadingQuiz
    ) {
      return;
    }

    this.generateQuiz();
  }

  closeChallenge(): void {
    if (this.savingResult) {
      return;
    }

    this.clearAnswerTimer();

    this.quizRequest?.unsubscribe();
    this.quizRequest = null;

    this.selectedLevel = null;
    this.quiz = [];

    this.currentQuestionIndex = 0;
    this.selectedAnswer = '';
    this.isAnswerRevealed = false;

    this.score = 0;
    this.loadingQuiz = false;
    this.quizFinished = false;
    this.passedLevel = false;
    this.resultSaved = false;

    this.lives = this.maxLives;
    this.lostAllLives = false;

    this.feedbackMessage = '';
    this.answerFeedback = '';
  }

  closeTrophyModal(): void {
    this.showTrophyModal = false;
  }

  private clearAnswerTimer(): void {
    if (this.answerTimer !== null) {
      clearTimeout(this.answerTimer);
      this.answerTimer = null;
    }
  }

  private clearFeedbackTimer(): void {
    if (this.feedbackTimer !== null) {
      clearTimeout(this.feedbackTimer);
      this.feedbackTimer = null;
    }
  }

  getNodeTop(index: number): number {
    const startOffset = 80;
    const spacing = 140;

    return startOffset + index * spacing;
  }

  getNodeLeft(index: number): number {
    const row = Math.floor(index / 3);
    const isEvenRow = row % 2 === 0;
    const posInRow = index % 3;

    return isEvenRow
      ? 20 + posInRow * 30
      : 80 - posInRow * 30;
  }

  getPathSegment(index: number): string {
    const x1 = this.getNodeLeft(index);
    const y1 = this.getNodeTop(index);

    const x2 = this.getNodeLeft(index + 1);
    const y2 = this.getNodeTop(index + 1);

    const middleY = (y1 + y2) / 2;

    return (
      `M ${x1} ${y1} ` +
      `C ${x1} ${middleY}, ${x2} ${middleY}, ${x2} ${y2}`
    );
  }

  logout(): void {
    this.auth.logout();
  }
}