import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceEquipeComponent } from './service-equipe/service-equipe.component';
import { ServiceJoueurComponent } from './service-joueur/service-joueur.component';
import { ServiceEntraineurComponent } from './service-entraineur/service-entraineur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceInventaireComponent } from './service-inventaire/service-inventaire.component';
import { ServicematerielComponent } from './servicemateriel/servicemateriel.component';
import { AuthComponent } from './auth/auth.component';
import { AccueilinventaireComponent } from './accueilinventaire/accueilinventaire.component';
import { ServiceRessourcesComponent } from './service-ressources/service-ressources.component';
import { AccueilressourceComponent } from './accueilressource/accueilressource.component';
import { FormulaireressourceComponent } from './formulaireressource/formulaireressource.component';


const routes: Routes = [
  {path: 'accueil', component: AccueilComponent,
      children: [
      {path: 'entraineur', component: ServiceEntraineurComponent},
      {path: '', component: ServiceEntraineurComponent},
      {path: 'equipe', component: ServiceEquipeComponent},
      {path: 'joueurs', component: ServiceJoueurComponent},
      ],
      },
  {path: 'accueilinventaire', component: AccueilinventaireComponent,
  children: [
        {path: '', component: ServiceInventaireComponent},
        {path: 'inventaire', component: ServiceInventaireComponent},
        {path: 'materiels', component: ServicematerielComponent},
        ],
  },
  {path: 'accueilressource', component: AccueilressourceComponent,
    children: [
          {path: '', component: ServiceRessourcesComponent},
          {path: 'ajout', component: FormulaireressourceComponent},
          {path: 'liste', component: ServiceRessourcesComponent},
          ],
    },
  {path: '', component: AuthComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
