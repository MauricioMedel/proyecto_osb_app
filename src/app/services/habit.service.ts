import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
 providedIn:'root'
})
export class HabitService {


private apiUrl = environment.apiUrl;


constructor(
 private http:HttpClient
){}

    getCatalog(){
    return this.http.get(
    `${this.apiUrl}/catalog/habits`
    );
  }

    getHabits(childId:string, date:string){

 return this.http.get(
 `${this.apiUrl}/children/${childId}/habits?date=${date}`
 );

}

saveHabit(childId:string,data:any){
 return this.http.post(
 `${this.apiUrl}/children/${childId}/habits`,
 data
 );

}


}