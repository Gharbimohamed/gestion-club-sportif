import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceEquipeService } from '../services/service-equipe.service';
import { ServiceEntraineurService } from '../services/service-entraineur.service';
import { Equipe } from '../Model/equipe';
import { Entraineur } from '../Model/entraineur';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-formulaireequipe',
  templateUrl: './formulaireequipe.component.html',
  styleUrls: ['./formulaireequipe.component.css']
})
export class FormulaireequipeComponent implements OnInit {
   data2 = new Entraineur();
   submitted = false;
   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
     private router: Router, private serviceEquipeServices: ServiceEquipeService,
     private serviceEntraineurServices: ServiceEntraineurService) {
   }
    equipe = new Equipe();
    equip = new Equipe();
    ngOnInit() {

    }

     repo(){



    }
    save(){
       console.log("1");
       this.serviceEntraineurServices.trainerbyid(($("#e").val()).toString()).subscribe(data => {
                                             this.equipe.trainer= data
                                             console.log("5");
                                             console.log("trainer rrr",this.equipe.trainer);
                                             console.log("djfhbd",this.equipe);
                                             this.serviceEquipeServices
                                                        .addequipe(this.equipe, this.equip.trainer).subscribe( data => {
                                                           console.log("3");
                                                           console.log(this.equip);
                                                           this.equipe = new Equipe();
                                                        },

                                                        error => {
                                                        console.log("4");
                                                        console.log("data not save",this.equip);
                                                        console.log(error)});

                            });
       console.log("2");

    }
    async onSubmit() {
        console.log("val trainer ",($("#e").val()).toString());
        this.submitted=true;
        await this.save();
    }

    onReset() {
        this.submitted = false;

    }
}

