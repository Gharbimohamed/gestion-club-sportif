import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceJoueursService } from '../services/service-joueurs.service';
import { Joueur } from '../Model/joueur';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { ServiceEquipeService } from '../services/service-equipe.service';

@Component({
  selector: 'app-formulairejoueur',
  templateUrl: './formulairejoueur.component.html',
  styleUrls: ['./formulairejoueur.component.css']
})
export class FormulairejoueurComponent implements OnInit {

   submitted = false;
   player = new Joueur();
   constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
     private router: Router,private serviceEquipeServices: ServiceEquipeService, private serviceJoueurServices: ServiceJoueursService) {
   }
    save(){
       console.log("1");
       this.serviceEquipeServices.getequipebyid(($("#ee").val()).toString()).subscribe(data => {
                                             this.player.equipee= data
                                             this.serviceJoueurServices
                                                        .addjoueur(this.player, this.player.equipee).subscribe( data => {
                                                           this.player = new Joueur();
                                                        },

                                                        error => {
                                                        console.log("4");
                                                        console.log("data not save",this.player);
                                                        console.log(error)});

                            });
       console.log("2");

    }
    async onSubmit() {
        console.log("val trainer ",($("#ee").val()).toString());
        this.submitted=true;
        await this.save();


    }

    onReset() {
        this.submitted = false;

    }
  ngOnInit(): void {
  }

}
