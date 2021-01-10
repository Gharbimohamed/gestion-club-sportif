import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { MaterielsPedagogique } from '../Model/Materiels-pedagogique';
@Injectable({
  providedIn: 'root'
})
export class MaterielsPedagogiqueService {

  constructor(private http: HttpClient) {

  }
  getmateriels() {
          return this.http.get<MaterielsPedagogique[]>('http://localhost:8083/listemateriel');
  }
  addmateriels(entraineur : MaterielsPedagogique): Observable<any>{
                           return this.http.post('http://localhost:8083/addmateriel', entraineur);
  }
  deletemateriel( i: number): Observable<any> {
            return this.http.delete(`http://localhost:8083/deletemateriel/${i}`,{ responseType: 'text'});
  }
  updatemateriel(id: string, equip: MaterielsPedagogique): Observable<any>{

                              return  this.http.put('http://localhost:8083/updatemateriel/'+id, equip);
  }
  getmaterielbyid(id: string):Observable<any> {
          return this.http.get('http://localhost:8083/materiel/'+id);
  }
}
