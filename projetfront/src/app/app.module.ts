import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceEquipeComponent } from './service-equipe/service-equipe.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TablesComponent } from './tables/tables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import { ServiceEquipeService } from './services/service-equipe.service';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceEntraineurComponent } from './service-entraineur/service-entraineur.component';
import { ModalequipeComponent } from './modalequipe/modalequipe.component';
import { FormulaireequipeComponent } from './formulaireequipe/formulaireequipe.component';
import { AuthComponent } from './auth/auth.component';
import { ModaltrainerComponent } from './modaltrainer/modaltrainer.component';
import { FormulairetrainerComponent } from './formulairetrainer/formulairetrainer.component';
import { AccueilinventaireComponent } from './accueilinventaire/accueilinventaire.component';
import { AccueilressourceComponent } from './accueilressource/accueilressource.component';
import { ServiceInventaireComponent } from './service-inventaire/service-inventaire.component';
import { ServiceRessourcesComponent } from './service-ressources/service-ressources.component';
import { ServiceJoueurComponent } from './service-joueur/service-joueur.component';
import { FormulairejoueurComponent } from './formulairejoueur/formulairejoueur.component';
import { ModaljoueurComponent } from './modaljoueur/modaljoueur.component';
import { ModalformulaireupdateComponent } from './modalformulaireupdate/modalformulaireupdate.component';
import { FormulaireressourceComponent } from './formulaireressource/formulaireressource.component';
import { FormulaireinventaireComponent } from './formulaireinventaire/formulaireinventaire.component';
import { FormulairematerielComponent } from './formulairemateriel/formulairemateriel.component';
import { ModalinventaireComponent } from './modalinventaire/modalinventaire.component';
import { ModalmetrielComponent } from './modalmetriel/modalmetriel.component';
import { ServicematerielComponent } from './servicemateriel/servicemateriel.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ServiceEquipeComponent,
    HeaderComponent,
    TablesComponent,
    AccueilComponent,
    ServiceEntraineurComponent,
    ModalequipeComponent,
    FormulaireequipeComponent,
    AuthComponent,
    ModaltrainerComponent,
    FormulairetrainerComponent,
    AccueilinventaireComponent,
    AccueilressourceComponent,
    ServiceInventaireComponent,
    ServiceRessourcesComponent,
    ServiceJoueurComponent,
    FormulairejoueurComponent,
    ModaljoueurComponent,
    ModalformulaireupdateComponent,
    FormulaireressourceComponent,
    FormulaireinventaireComponent,
    FormulairematerielComponent,
    ModalinventaireComponent,
    ModalmetrielComponent,
    ServicematerielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    ServiceEquipeComponent,
    ServiceEntraineurComponent,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
