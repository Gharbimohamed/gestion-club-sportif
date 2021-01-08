import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from '../Model/equipe';
import { Joueur } from '../Model/joueur';
import {Observable} from 'rxjs';
import { ServiceEquipeService } from '../services/service-equipe.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceJoueursService {

    constructor(private http: HttpClient) { }


    getjoueur() {
                  return this.http.get<Joueur[]>('http://localhost:8081/listejoueur');
    }
    addjoueur(player: Joueur, equip: Equipe): Observable<any>{
                          console.log(player);
                          console.log(player.equipee);
                          return  this.http.post('http://localhost:8081/addjoueur', player);
    }
    deletejoueur( i: number): Observable<any> {
                    return this.http.delete(`http://localhost:8081/deletejoueur/${i}`,{ responseType: 'text'});
    }
    updatejoueur(id: string, player: Joueur): Observable<any>{

                    return  this.http.put('http://localhost:8081/updateplayer/'+id, player);
    }
    getplayerbyid( i: string): Observable<any> {
          return this.http.get<Equipe>('http://localhost:8081/player/'+i);
    }
}
