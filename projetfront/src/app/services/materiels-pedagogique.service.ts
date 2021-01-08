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
}
