import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
@Component({
  selector: 'app-accueilinventaire',
  templateUrl: './accueilinventaire.component.html',
  styleUrls: ['./accueilinventaire.component.css']
})
export class AccueilinventaireComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
                      e.preventDefault();
                      $("#wrapper").toggleClass("toggled");

                    });
  }
  afficher(nompage: string): void {
    this.router.navigate([`accueilinventaire/${nompage}`]);
  }
  afficheraccueil(nompage: string): void {
      this.router.navigate([`${nompage}`]);
  }
}
