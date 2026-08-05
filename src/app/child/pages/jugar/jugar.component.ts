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
  isCorrectChoice: boolean | null = null; // Nuevo: Para pintar el botón rojo o verde

  quiz: QuizQuestion[] = [];
  currentQuestionIndex = 0;
  score = 0;
  quizFinished = false;
  passedLevel = false;

  // Nuevas variables para el sistema de vidas
  lives = 3;
  gameOver = false;

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
    if (levelNumber <= 10) return 50;
    if (levelNumber <= 20) return 75;
    if (levelNumber <= 30) return 100;
    if (levelNumber <= 40) return 150;
    return 200;
  }

  setDefaultLevels() {
    const maxUnlockedLevel = parseInt(localStorage.getItem(`child_max_level_${this.childId}`) || '1', 10);

    this.levels = Array.from({ length: 50 }, (_, i) => {
      const levelNum = i + 1;
      let currentStatus: 'completed' | 'unlocked' | 'locked' = 'locked';

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
    
    // Reiniciar estados del quiz y vidas
    this.lives = 3;
    this.gameOver = false;
    this.selectedAnswer = '';
    this.isAnswerRevealed = false;
    this.isCorrectChoice = null;
    this.feedbackMessage = '';
    
    this.generateQuiz();
  }

  selectAnswer(option: string) {
    if (!this.currentQuestion || this.isAnswerRevealed || this.gameOver) return;

    this.selectedAnswer = option;
    this.isAnswerRevealed = true;
    
    this.isCorrectChoice = (option === this.currentQuestion.answer);

    if (!this.isCorrectChoice) {
      this.lives--; 
      
      if (this.lives <= 0) {
        setTimeout(() => {
          this.gameOver = true;
          this.isAnswerRevealed = false;
        }, 1500);
        return;
      }
    } else {
      this.score++;
    }

    // UX: Pausa visual de 1.5 segundos
    setTimeout(() => {
      this.isAnswerRevealed = false;
      this.selectedAnswer = '';
      
      if (this.isCorrectChoice) {
        this.isCorrectChoice = null;
        if (this.currentQuestionIndex < this.quiz.length - 1) {
          this.currentQuestionIndex++;
        } else {
          this.finishQuiz(); 
        }
      } else {
        this.isCorrectChoice = null;
        this.feedbackMessage = '¡Ups! Inténtalo de nuevo. Tú puedes.';
        setTimeout(() => this.feedbackMessage = '', 2000);
      }
    }, 1500);
  }

  finishQuiz() {
    this.quizFinished = true;
    this.passedLevel = true; // Si llegó aquí es porque no perdió sus 3 vidas

    let xpEarned = this.selectedLevel?.points || 50;
    if (this.lives === 3) xpEarned += Math.round(xpEarned * 0.2); // 20% bonus por perfección

    this.feedbackMessage = `🎉 ¡Nivel Superado! Ganaste ${xpEarned} XP (Vidas: ${this.lives})`;

    this.http.post(
      `${environment.apiUrl}/ml/children/${this.childId}/quiz-result`,
      {
        topic: this.selectedTopic, 
        level: this.selectedLevel?.levelNumber,
        score: this.score,
        totalQuestions: this.quiz.length,
        percentage: 100, // Forzado a 100 porque debe responder todo bien para pasar
        xpEarned,
        passed: this.passedLevel,
        livesRemaining: this.lives // Añadimos las vidas restantes por si el backend las necesita
      },
      { headers: this.getHeaders() }
    ).subscribe();

    this.completeSelectedLevel();
  }

  completeSelectedLevel() {
    if (!this.selectedLevel) return;

    const index = this.levels.findIndex(l => l.id === this.selectedLevel?.id);
    let maxLevelToSave = this.selectedLevel.levelNumber;

    if (index !== -1) {
      this.levels[index].status = 'completed';
      
      if (this.levels[index + 1]) {
        this.levels[index + 1].status = 'unlocked';
        maxLevelToSave = this.levels[index + 1].levelNumber;
      }
    }

    localStorage.setItem(`child_max_level_${this.childId}`, maxLevelToSave.toString());

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
    this.isCorrectChoice = null;
    this.quiz = [];
    this.currentQuestionIndex = 0;
    this.quizFinished = false;
    this.passedLevel = false;
    this.gameOver = false;
  }

  closeTrophyModal() {
    this.showTrophyModal = false;
  }

  // Espaciado vertical fijo aumentado a 180px para dar mucho más espacio
  getNodeTop(index: number): number {
    const startOffset = 80; 
    const spacing = 180; 
    return startOffset + (index * spacing);
  }

  // Nuevo algoritmo de Zig-Zag (Evita que dos niveles caigan en la misma columna)
  getNodeLeft(index: number): number {
    // Patrón: Izquierda, Centro, Derecha, Centro, repite...
    const positions = [20, 50, 80, 50]; 
    return positions[index % 4];
  }

  // Calcula el alto total del fondo para que quepan todos los niveles y la línea final
  getMapHeight(): number {
    return this.getNodeTop(this.levels.length) + 150;
  }

  logout() {
    this.auth.logout();
  }
}