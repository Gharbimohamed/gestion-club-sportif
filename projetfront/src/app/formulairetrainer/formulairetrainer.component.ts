import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceEntraineurService } from '../services/service-entraineur.service';
import { Entraineur } from '../Model/entraineur';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-formulairetrainer',
  templateUrl: './formulairetrainer.component.html',
  styleUrls: ['./formulairetrainer.component.css']
})
export class FormulairetrainerComponent implements OnInit {
   submitted = false;
   entraineur = new Entraineur();
   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
     private router: Router, private serviceEntraineurServices: ServiceEntraineurService) {
   }
   async save() {

          await this.serviceEntraineurServices
          .addtrainer(this.entraineur).subscribe(data => {
             this.entraineur = new Entraineur();
          },

          error => console.log(error));

   }
   async onSubmit() {

           this.submitted = true;
           await this.save();
           console.log("5");
   }
  ngOnInit(): void {
  }

}
