import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
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
export class JugarComponent implements OnInit {

  childName = 'Campeón';
  childId = '';

  loading = true;
  loadingQuiz = false;

  errorMessage = '';
  feedbackMessage = '';

  selectedLevel: Level | null = null;
  selectedAnswer = '';
  isAnswerRevealed = false; 

  quiz: QuizQuestion[] = [];
  currentQuestionIndex = 0;
  score = 0;
  quizFinished = false;
  passedLevel = false;

  selectedTopic = 'nutrition';

  showTrophyModal = false;
  newTrophy = {
    title: '',
    description: '',
    icon: ''
  };

  levels: Level[] = [];

  savingResult = false;

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
  this.loading = true;
  this.errorMessage = '';

  if (!this.childId) {
    this.loading = false;
    this.errorMessage = 'Inicia sesión con una cuenta de niño.';
    return;
  }

  this.http.get<any>(
    `${environment.apiUrl}/ml/children/${this.childId}/game-progress`,
    { headers: this.getHeaders() }
  ).subscribe({
    next: (res) => {
      this.levels = res.data.levels.map(
        (level: any, index: number) => ({
          ...level,
          icon: this.getLevelIcon(index)
        })
      );

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

  getLevelStatus(status: string, index: number): 'completed' | 'unlocked' | 'locked' {
    if (status === 'completed') return 'completed';
    if (status === 'in_progress' || index === 0) return 'unlocked';
    return 'locked';
  }

  getLevelIcon(index: number): string {
    const icons = ['🥦', '🏃', '💧', '🍎', '🚴', '⭐', '🥑', '🤸', '🥕', '🏆'];
    return icons[index % icons.length];
  }

  calculatePoints(levelNumber: number): number {
    // Escalado de XP dinámico: Nivel 1 = 50xp, Nivel 50 = ~200xp
    if (levelNumber <= 10) return 50;
    if (levelNumber <= 20) return 75;
    if (levelNumber <= 30) return 100;
    if (levelNumber <= 40) return 150;
    return 200;
  }

  setDefaultLevels() {
    // 1. Recuperamos el nivel máximo alcanzado desde localStorage (por defecto será el 1)
    const maxUnlockedLevel = parseInt(localStorage.getItem(`child_max_level_${this.childId}`) || '1', 10);

    // 2. Motor de generación para 50 niveles con persistencia local
    this.levels = Array.from({ length: 50 }, (_, i) => {
      const levelNum = i + 1;
      let currentStatus: 'completed' | 'unlocked' | 'locked' = 'locked';

      // Lógica de estados basada en el progreso guardado
      if (levelNum < maxUnlockedLevel) {
        currentStatus = 'completed';
      } else if (levelNum === maxUnlockedLevel) {
        currentStatus = 'unlocked';
      }

      return {
        id: `nivel-${levelNum}`,
        levelNumber: levelNum,
        title: `Nivel ${levelNum}`,
        description: this.getDynamicDescription(levelNum),
        status: currentStatus,
        points: this.calculatePoints(levelNum),
        icon: this.getLevelIcon(i)
      };
    });
  }

  getDynamicDescription(level: number): string {
    if (level <= 10) return 'Conceptos básicos: alimentos y agua.';
    if (level <= 20) return 'Descubre los grupos alimenticios y la energía.';
    if (level <= 30) return 'Aprende sobre nutrientes y calorías.';
    if (level <= 40) return 'Toma decisiones saludables y mejora tus hábitos.';
    return 'Desafíos expertos. ¡Demuestra todo lo que sabes!';
  }

  get currentQuestion(): QuizQuestion | null {
    if (!this.quiz.length) return null;
    return this.quiz[this.currentQuestionIndex];
  }

  generateQuiz() {
    if (!this.childId || !this.selectedLevel) return;

    this.loadingQuiz = true;

    // Se envía el nivel actual al backend para ajustar la dificultad del prompt
    this.http.post<any>(
      `${environment.apiUrl}/ml/children/${this.childId}/generate-quiz`,
      { 
        topic: this.selectedTopic,
        level: this.selectedLevel.levelNumber 
      },
      { headers: this.getHeaders() }
    ).subscribe({
      next: (res) => {
        const quizData = res.data?.quiz || res.data;
        this.quiz = quizData.questions || [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.quizFinished = false;
        this.passedLevel = false;
        this.loadingQuiz = false;
      },
      error: (err) => {
        console.error(err);
        this.loadingQuiz = false;
        this.feedbackMessage = 'Error conectando con la aventura. Intenta de nuevo.';
      }
    });
  }

  openLevel(level: Level) {
    if (level.status === 'locked') {
      this.feedbackMessage = '🔒 Primero completa el nivel anterior para desbloquear este.';
      setTimeout(() => this.feedbackMessage = '', 3000);
      return;
    }
    this.selectedLevel = level;
    this.selectedAnswer = '';
    this.isAnswerRevealed = false;
    this.feedbackMessage = '';
    this.generateQuiz();
  }

  selectAnswer(option: string) {
    if (!this.currentQuestion || this.isAnswerRevealed) return;

    this.selectedAnswer = option;
    this.isAnswerRevealed = true; // Bloquea interacciones

    if (option === this.currentQuestion.answer) {
      this.score++;
    }

    // UX: Pausa visual de 1.5 segundos para mostrar si fue correcta o incorrecta
    setTimeout(() => {
      this.isAnswerRevealed = false;
      this.selectedAnswer = '';
      
      if (this.currentQuestionIndex < this.quiz.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.finishQuiz();
      }
    }, 1500);
  }

finishQuiz() {
  if (
    !this.childId ||
    !this.selectedLevel ||
    !this.quiz.length ||
    this.savingResult ||
    this.quizFinished
  ) {
    return;
  }

  this.quizFinished = true;
  this.savingResult = true;
  this.passedLevel = false;
  this.feedbackMessage = 'Guardando resultado...';

  this.http.post<any>(
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
      this.passedLevel = res.data.passed;

      this.feedbackMessage = this.passedLevel
        ? `🎉 ¡Nivel superado! Ganaste ${res.data.xpEarned} XP.`
        : `Obtuviste ${this.score}/${this.quiz.length}. Necesitas al menos el 80% para avanzar.`;

      this.loadLevels();
    },
    error: () => {
      this.savingResult = false;
      this.feedbackMessage =
        'No se pudo guardar el resultado. Cierra el reto y vuelve a intentarlo.';
    }
  });
}

  completeSelectedLevel() {
    if (!this.selectedLevel) return;

    const index = this.levels.findIndex(l => l.id === this.selectedLevel?.id);
    let maxLevelToSave = this.selectedLevel.levelNumber;

    if (index !== -1) {
      this.levels[index].status = 'completed';
      
      // Desbloquear el siguiente nivel de forma local
      if (this.levels[index + 1]) {
        this.levels[index + 1].status = 'unlocked';
        maxLevelToSave = this.levels[index + 1].levelNumber;
      }
    }

    // Guardamos el progreso en el navegador amarrado al ID del niño
    localStorage.setItem(`child_max_level_${this.childId}`, maxLevelToSave.toString());

    // Validación de Trofeos a niveles específicos
    this.checkAndUnlockTrophies(this.selectedLevel.levelNumber);
  }

  checkAndUnlockTrophies(completedLevel: number) {
    let trophyConfig = null;

    if (completedLevel === 10) {
      trophyConfig = { id: 'trofeo-10', title: 'Explorador Saludable', description: '¡Superaste los primeros 10 niveles!', icon: '🌟' };
    } else if (completedLevel === 25) {
      trophyConfig = { id: 'trofeo-25', title: 'Héroe de la Nutrición', description: '¡Llegaste a la mitad del camino!', icon: '🦸' };
    } else if (completedLevel === 50) {
      trophyConfig = { id: 'trofeo-50', title: 'Maestro de Hábitos', description: '¡Has completado toda la aventura!', icon: '👑' };
    }

    if (trophyConfig) {
      this.unlockTrophy(trophyConfig);
    }
  }

  unlockTrophy(trophy: any) {
    const savedTrophies = JSON.parse(localStorage.getItem(`child_trophies_${this.childId}`) || '[]');
    const alreadyExists = savedTrophies.some((item: any) => item.id === trophy.id);

    if (!alreadyExists) {
      savedTrophies.push({ ...trophy, unlockedAt: new Date().toISOString() });
      localStorage.setItem(`child_trophies_${this.childId}`, JSON.stringify(savedTrophies));

      this.newTrophy = { title: trophy.title, description: trophy.description, icon: trophy.icon };
      this.showTrophyModal = true;
    }
  }

  closeChallenge() {
    if (this.savingResult) return;
    
    this.selectedLevel = null;
    this.feedbackMessage = '';
    this.selectedAnswer = '';
    this.isAnswerRevealed = false;
    this.quiz = [];
    this.currentQuestionIndex = 0;
    this.quizFinished = false;
    this.passedLevel = false;
  }

  closeTrophyModal() {
    this.showTrophyModal = false;
  }

  // Espaciado vertical fijo en píxeles (no en porcentajes)
  getNodeTop(index: number): number {
    const startOffset = 80; // Margen desde arriba del mapa
    const spacing = 140; // Separación vertical entre cada nivel
    return startOffset + (index * spacing);
  }

  // Zig-Zag en porcentajes (horizontal)
  getNodeLeft(index: number): number {
    const row = Math.floor(index / 3); 
    const isEvenRow = row % 2 === 0;
    const posInRow = index % 3;
    
    return isEvenRow ? 20 + (posInRow * 30) : 80 - (posInRow * 30);
  }

  logout() {
    this.auth.logout();
  }
}