import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Ressource } from '../Model/ressource';
@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(private http: HttpClient) {

  }
  getressources() {
        return this.http.get<Ressource[]>('http://localhost:8084/listeressources');
  }
  deleteressource( i: number): Observable<any> {
        return this.http.delete(`http://localhost:8084/deleteressource/${i}`,{ responseType: 'text'});
  }
  addressource(ressource : Ressource): Observable<any>{
                           return this.http.post('http://localhost:8084/addressource', ressource);
  }
  login(userName: string, password: string): Observable<any>{
                             return this.http.get("http://localhost:8085/signin/"+userName+"/"+password);
  }
  updateressource(id: string, equip: Ressource): Observable<any>{

                            return  this.http.put('http://localhost:8084/updateressource/'+id, equip);
  }
        getressbyid( i: string): Observable<any> {
            return this.http.get<Ressource>('http://localhost:8084/ressource/'+i);
        }
}
