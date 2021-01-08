import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueilressource',
  templateUrl: './accueilressource.component.html',
  styleUrls: ['./accueilressource.component.css']
})
export class AccueilressourceComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
                      e.preventDefault();
                      $("#wrapper").toggleClass("toggled");

                    });
  }
  afficher(nompage: string): void {
    this.router.navigate([`accueilressource/${nompage}`]);
  }
  afficheraccueil(nompage: string): void {
      this.router.navigate([`${nompage}`]);
  }
}
