import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from '../Model/equipe';
import { Entraineur } from '../Model/entraineur';
import {Observable} from 'rxjs';
import { ServiceEntraineurService } from '../services/service-entraineur.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceEquipeService {
  constructor(private http: HttpClient, private serviceentraineurservicess: ServiceEntraineurService) {

      }
      train: Entraineur;
      getequipebyid( i: string): Observable<any> {
          return this.http.get<Equipe>('http://localhost:8081/equipe/'+i);
      }
      deletequip( i: number): Observable<any> {
                return this.http.delete(`http://localhost:8081/deleteequipe/${i}`,{ responseType: 'text'});
      }

      getequipes() {
                return this.http.get<Equipe[]>('http://localhost:8081/listeequip');
            }
      addequipe(equip: Equipe, train: Entraineur): Observable<any>{

                      return  this.http.post('http://localhost:8081/addEquip', equip);
      }
      updateEquipe(id: string, equip: Equipe): Observable<any>{

                            return  this.http.put('http://localhost:8081/updateam/'+id, equip);
      }
}
