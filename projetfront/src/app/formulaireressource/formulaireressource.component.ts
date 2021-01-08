import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RessourceService } from '../services/ressource.service';
import { Ressource } from '../Model/ressource';
import * as $ from 'jquery';
@Component({
  selector: 'app-formulaireressource',
  templateUrl: './formulaireressource.component.html',
  styleUrls: ['./formulaireressource.component.css']
})
export class FormulaireressourceComponent implements OnInit {
   submitted = false;
   ressource = new Ressource();
   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
     private router: Router, private ressourceServices: RessourceService) {
   }
  ngOnInit(): void {
  }

  async save() {

            await this.ressourceServices
            .addressource(this.ressource).subscribe(data => {
               this.ressource = new Ressource();
            },

            error => console.log(error));

     }
     async onSubmit() {

             this.submitted = true;
             await this.save();
             window.location.reload();

     }

}
