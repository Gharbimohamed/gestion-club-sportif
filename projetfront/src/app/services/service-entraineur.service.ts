import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entraineur } from '../Model/entraineur';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEntraineurService {

  constructor(private http: HttpClient) { }
  getentraineurs() {
                  return  this.http.get<Entraineur[]>('http://localhost:8081/listetrainer');
  }
   trainerbyid(id: string): Observable<any> {
                    return  this.http.get<Entraineur>('http://localhost:8081/trainer/'+id);
   }
   addtrainer(entraineur : Entraineur): Observable<any>{
                         return this.http.post('http://localhost:8081/addtrainer', entraineur);
   }
   updatetrainer(id: string, trainer: Entraineur): Observable<any>{

                       return  this.http.put('http://localhost:8081/updatetrainer/'+id, trainer);
   }
}
