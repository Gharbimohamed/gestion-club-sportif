import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
                      e.preventDefault();
                      $("#wrapper").toggleClass("toggled");

                    });
  }
  afficher(nompage: string): void {
    this.router.navigate([`accueil/${nompage}`]);
  }
  afficheraccueil(nompage: string): void {
      this.router.navigate([`${nompage}`]);
    }

}
