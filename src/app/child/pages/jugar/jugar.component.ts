import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

interface Level {
  id: string;
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
export class JugarComponent implements OnInit {

  childName = 'Campeón';
  childId = '';

  loading = true;
  loadingQuiz = false;

  errorMessage = '';
  feedbackMessage = '';

  selectedLevel: Level | null = null;
  selectedAnswer = '';

  quiz: QuizQuestion[] = [];
  currentQuestionIndex = 0;
  score = 0;
  quizFinished = false;

  selectedTopic = 'nutrition';

  showTrophyModal = false;

  newTrophy = {
    title: '',
    description: '',
    icon: ''
  };

  levels: Level[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private auth: AuthService
  ) {}

  ngOnInit() {

    const user = this.auth.getCurrentUser();

    this.childName = user?.username || 'Campeón';
    this.childId = user?.childId || '';

    this.loadLevels();
  }

  getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${this.auth.getToken()}`
    });
  }

  loadLevels() {

    if (!this.childId) {

      this.setDefaultLevels();
      this.loading = false;

      return;
    }

    this.http.get<any>(
      `${environment.apiUrl}/children/${this.childId}/challenges`,
      {
        headers: this.getHeaders()
      }
    ).subscribe({

      next: (res) => {

        const apiChallenges = res.data || [];

        if (apiChallenges.length === 0) {

          this.setDefaultLevels();

        } else {

          this.levels = apiChallenges.map(
            (item: any, index: number) => ({

              id: item.child_challenge_id,

              title:
                item.title ||
                `Nivel ${index + 1}`,

              description:
                item.description ||
                'Completa este reto saludable.',

              status: this.getLevelStatus(
                item.status,
                index
              ),

              points:
                item.points_reward || 10,

              icon:
                this.getLevelIcon(index)

            })
          );
        }

        this.loading = false;
      },

      error: () => {

        this.setDefaultLevels();

        this.loading = false;
      }
    });
  }

  getLevelStatus(
    status: string,
    index: number
  ): 'completed' | 'unlocked' | 'locked' {

    if (status === 'completed') {
      return 'completed';
    }

    if (
      status === 'in_progress' ||
      index === 0
    ) {
      return 'unlocked';
    }

    return 'locked';
  }

  getLevelIcon(index: number): string {

    const icons = [
      '🥦',
      '🏃',
      '💧',
      '🍎',
      '🚴',
      '⭐',
      '🏆'
    ];

    return icons[index % icons.length];
  }

  setDefaultLevels() {

    this.levels = [

      {
        id: 'nivel-1',
        title: 'Nivel 1',
        description:
          'Elige el alimento más saludable.',
        status: 'unlocked',
        points: 10,
        icon: '🥦'
      },

      {
        id: 'nivel-2',
        title: 'Nivel 2',
        description:
          'Reto de movimiento saludable.',
        status: 'locked',
        points: 15,
        icon: '🏃'
      },

      {
        id: 'nivel-3',
        title: 'Nivel 3',
        description:
          'Aprende a hidratarte.',
        status: 'locked',
        points: 20,
        icon: '💧'
      },

      {
        id: 'nivel-4',
        title: 'Nivel 4',
        description:
          'Hábitos de alimentación saludable.',
        status: 'locked',
        points: 25,
        icon: '🍎'
      },

      {
        id: 'nivel-5',
        title: 'Nivel 5',
        description:
          'Actividad física divertida.',
        status: 'locked',
        points: 30,
        icon: '🚴'
      }
    ];
  }

  get currentQuestion(): QuizQuestion | null {

    if (!this.quiz.length) {
      return null;
    }

    return this.quiz[this.currentQuestionIndex];
  }

  generateQuiz() {

    if (!this.childId) {
      return;
    }

    this.loadingQuiz = true;

    this.http.post<any>(
      `${environment.apiUrl}/ml/children/${this.childId}/generate-quiz`,
      {
        topic: this.selectedTopic
      },
      {
        headers: this.getHeaders()
      }
    )
    .subscribe({

      next: (res) => {

        const quizData =
          res.data?.quiz ||
          res.data;

        this.quiz =
          quizData.questions || [];

        this.currentQuestionIndex = 0;
        this.score = 0;
        this.quizFinished = false;

        this.loadingQuiz = false;
      },

      error: (err) => {

        console.error(err);

        this.loadingQuiz = false;

        this.feedbackMessage =
          'Error generando el quiz.';
      }
    });
  }

  openLevel(level: Level) {

    if (level.status === 'locked') {

      this.feedbackMessage =
        '🔒 Primero completa el nivel anterior.';

      return;
    }

    this.selectedLevel = level;

    this.selectedAnswer = '';

    this.feedbackMessage = '';

    this.generateQuiz();
  }

  selectAnswer(option: string) {

    if (!this.currentQuestion) {
      return;
    }

    this.selectedAnswer = option;

    if (
      option ===
      this.currentQuestion.answer
    ) {
      this.score++;
    }

    if (
      this.currentQuestionIndex <
      this.quiz.length - 1
    ) {

      this.currentQuestionIndex++;

    } else {

      this.finishQuiz();
    }
  }

  finishQuiz() {

    this.quizFinished = true;

    const percentage =
      (this.score / this.quiz.length) * 100;

    const xpEarned =
      Math.round(percentage);

    this.feedbackMessage =
      `🎉 Obtuviste ${this.score} de ${this.quiz.length}`;

    this.http.post(
      `${environment.apiUrl}/ml/children/${this.childId}/quiz-result`,
      {
        topic: this.selectedTopic,
        score: this.score,
        totalQuestions: this.quiz.length,
        percentage,
        xpEarned
      },
      {
        headers: this.getHeaders()
      }
    ).subscribe();

    this.completeSelectedLevel();
  }

  completeSelectedLevel() {

    if (!this.selectedLevel) {
      return;
    }

    const index =
      this.levels.findIndex(
        level =>
          level.id ===
          this.selectedLevel?.id
      );

    if (index !== -1) {

      this.levels[index].status =
        'completed';

      if (
        this.levels[index + 1]
      ) {

        this.levels[index + 1].status =
          'unlocked';
      }
    }

    if (
      this.childId &&
      !this.selectedLevel.id.startsWith(
        'nivel-'
      )
    ) {

      this.http.patch<any>(
        `${environment.apiUrl}/children/${this.childId}/challenges/${this.selectedLevel.id}`,
        {
          status: 'completed'
        },
        {
          headers: this.getHeaders()
        }
      ).subscribe();
    }

    const completedLevels =
      this.levels.filter(
        level =>
          level.status === 'completed'
      ).length;

    if (completedLevels === 5) {
      this.unlockStageTrophy();
    }
  }

  unlockStageTrophy() {

    const trophy = {

      id: 'etapa-1',

      title:
        'Explorador Saludable',

      description:
        'Completaste los primeros 5 niveles.',

      icon: '🏆',

      unlockedAt:
        new Date().toISOString()
    };

    const savedTrophies =
      JSON.parse(
        localStorage.getItem(
          'child_trophies'
        ) || '[]'
      );

    const alreadyExists =
      savedTrophies.some(
        (item: any) =>
          item.id === trophy.id
      );

    if (!alreadyExists) {

      savedTrophies.push(trophy);

      localStorage.setItem(
        'child_trophies',
        JSON.stringify(savedTrophies)
      );

      this.newTrophy = {

        title: trophy.title,

        description:
          trophy.description,

        icon: trophy.icon
      };

      this.showTrophyModal = true;
    }
  }

  closeChallenge() {

    this.selectedLevel = null;

    this.feedbackMessage = '';

    this.selectedAnswer = '';

    this.quiz = [];

    this.currentQuestionIndex = 0;

    this.quizFinished = false;
  }

  closeTrophyModal() {
    this.showTrophyModal = false;
  }

  getNodeTop(index: number): number {

    const positions = [
      78, 62, 48, 34, 20, 35, 55
    ];

    return positions[
      index % positions.length
    ];
  }

  getNodeLeft(index: number): number {

    const positions = [
      12, 28, 45, 62, 80, 90, 70
    ];

    return positions[
      index % positions.length
    ];
  }

  logout() {
    this.auth.logout();
  }
}