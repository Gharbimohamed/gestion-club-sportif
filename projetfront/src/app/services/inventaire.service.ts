import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Inventaire } from '../Model/inventaire';

@Injectable({
  providedIn: 'root'
})
export class InventaireService {

  constructor(private http: HttpClient) {

  }
  getinventaire() {
          return this.http.get<Inventaire[]>('http://localhost:8083/listeinventaires');
  }
  getinventairebyid(id: string):Observable<any> {
          return this.http.get('http://localhost:8083/inventaire/'+id);
  }
  deleteinventaire( i: number): Observable<any> {
          return this.http.delete(`http://localhost:8083/deleteinventaire/${i}`,{ responseType: 'text'});
  }
  addinventaire( inventaire: Inventaire): Observable<any> {
            return this.http.post(`http://localhost:8083/addinventaire`,inventaire);
  }
  updateressource(id: string, equip: Inventaire): Observable<any>{

                            return  this.http.put('http://localhost:8083/updateinventaire/'+id, equip);
  }
}
