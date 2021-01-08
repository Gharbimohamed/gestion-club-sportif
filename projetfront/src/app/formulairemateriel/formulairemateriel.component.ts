import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterielsPedagogiqueService } from '../services/materiels-pedagogique.service';
import { MaterielsPedagogique } from '../Model/Materiels-pedagogique';
import { InventaireService } from '../services/inventaire.service';
import { Inventaire } from '../Model/inventaire';
import * as $ from 'jquery';

@Component({
  selector: 'app-formulairemateriel',
  templateUrl: './formulairemateriel.component.html',
  styleUrls: ['./formulairemateriel.component.css']
})
export class FormulairematerielComponent implements OnInit {
   inventaire: Inventaire;
   materiels = new MaterielsPedagogique();
   submitted = false;
   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
     private router: Router, private serviceinventaireServices: InventaireService,
     private serviceEntraineurServices: MaterielsPedagogiqueService) {
   }

    save(){
       console.log("1");
       this.serviceinventaireServices.getinventairebyid(($("#em").val()).toString()).subscribe(data => {
                                             this.materiels.inventaires= data
                                             this.serviceEntraineurServices
                                                        .addmateriels(this.materiels).subscribe( data => {
                                                           this.materiels = new MaterielsPedagogique();
                                                        },

                                                        error => {
                                                        console.log("4");
                                                        console.log("data not save",this.materiels);
                                                        console.log(error)});

                            });
       console.log("2");

    }
   async onSubmit() {

           this.submitted = true;
           await this.save();
           console.log("5");
   }
  ngOnInit(): void {
  }

}
