import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MlService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // 1. NUEVO: Traer los datos guardados de la BD para el usuario
  // Esto hará que al recargar la página, los contadores ya tengan los valores reales
  getDailySummary(childId: string): Observable<any> {
  return this.http.get(
    `${this.apiUrl}/ml/daily-summary/${childId}`
  );
}

  // 2. NUEVO: Guardar un cambio de hábito específico
  // Esto hará que al dar clic en "+", se guarde en PostgreSQL
  updateHabit(childId: string, habitType: string, value: number): Observable<any> {

  return this.http.post(
    `${this.apiUrl}/habitos/actualizar`,
    {
      childId,
      habitType,
      value
    }
  );

}
  analyzePattern(summaryId:string, data:any){
  return this.http.post(
    `${this.apiUrl}/ml/daily-summary/${summaryId}/analyze-pattern`,
    data
  );
}
}