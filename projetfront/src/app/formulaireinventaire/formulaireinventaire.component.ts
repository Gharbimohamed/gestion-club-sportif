import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventaireService } from '../services/inventaire.service';
import { Inventaire } from '../Model/inventaire';
import * as $ from 'jquery';
@Component({
  selector: 'app-formulaireinventaire',
  templateUrl: './formulaireinventaire.component.html',
  styleUrls: ['./formulaireinventaire.component.css']
})
export class FormulaireinventaireComponent implements OnInit {

   inventaire = new Inventaire();
   submitted = false;
   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
     private router: Router,
     private serviceEntraineurServices: InventaireService) {
   }
   async save() {

          await this.serviceEntraineurServices
          .addinventaire(this.inventaire).subscribe(data => {
             this.inventaire = new Inventaire();
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
