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
  isAnswerRevealed = false; // Bloquea clics múltiples mientras muestra si es correcto/incorrecto

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
      { headers: this.getHeaders() }
    ).subscribe({
      next: (res) => {
        const apiChallenges = res.data || [];

        if (apiChallenges.length === 0) {
          this.setDefaultLevels();
        } else {
          // Lógica para mapear niveles desde BD si los tienes guardados individualmente
          this.levels = apiChallenges.map((item: any, index: number) => ({
            id: item.child_challenge_id,
            levelNumber: index + 1,
            title: item.title || `Nivel ${index + 1}`,
            description: item.description || 'Completa este reto saludable.',
            status: this.getLevelStatus(item.status, index),
            points: item.points_reward || this.calculatePoints(index + 1),
            icon: this.getLevelIcon(index)
          }));
        }
        this.loading = false;
      },
      error: () => {
        this.setDefaultLevels();
        this.loading = false;
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
    this.quizFinished = true;
    
    // Regla de Negocio: Se requiere el 80% (4 de 5 correctas)
    const percentage = (this.score / this.quiz.length) * 100;
    this.passedLevel = percentage >= 80;

    let xpEarned = 0;

    if (this.passedLevel) {
      xpEarned = this.selectedLevel?.points || 50;
      if (percentage === 100) xpEarned += Math.round(xpEarned * 0.2); // 20% bonus perfecto
      this.feedbackMessage = `🎉 ¡Nivel Superado! Ganaste ${xpEarned} XP`;
    } else {
      xpEarned = 10; // XP de consolación
      this.feedbackMessage = `💪 Estuviste cerca. Necesitas al menos 4 correctas. Obtuviste ${this.score}/5.`;
    }

    // Persistir resultado en base de datos
    this.http.post(
      `${environment.apiUrl}/ml/children/${this.childId}/quiz-result`,
      {
        topic: this.selectedTopic, // <--- FALTABA ESTA LÍNEA
        level: this.selectedLevel?.levelNumber,
        score: this.score,
        totalQuestions: this.quiz.length,
        percentage,
        xpEarned,
        passed: this.passedLevel
      },
      { headers: this.getHeaders() }
    ).subscribe();

    if (this.passedLevel) {
      this.completeSelectedLevel();
    }
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