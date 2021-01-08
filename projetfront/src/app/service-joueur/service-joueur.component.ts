import { Router, ActivatedRoute } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceJoueursService } from '../services/service-joueurs.service';
import { Joueur } from '../Model/joueur';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
@Component({
  selector: 'app-service-joueur',
  templateUrl: './service-joueur.component.html',
  styleUrls: ['./service-joueur.component.css']
})
export class ServiceJoueurComponent implements AfterViewInit {
displayedColumns: string[] = ['id_personne', 'nom', 'prenom', 'age','position','Action','Modifier'];
submitted = false;
id : string;
player = new Joueur();
 constructor(private route: ActivatedRoute, private modalService: NgbModal,
     private router: Router, private serviceJoueursServices: ServiceJoueursService) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.listejoueurs();

    }
    openVerticallyCentered(id: string, content) {
          this.modalService.open(content, { centered: true });

          this.listequipesupdate(id);
    }
    dataSource = new MatTableDataSource<Joueur>();
    public listejoueurs(){
    let resp = this.serviceJoueursServices.getjoueur();
    resp.subscribe( report => this.dataSource.data = report)
    console.log("liste Joueurs avant");
    console.log(this.dataSource.data)

    }
    public listequipesupdate(id : string){
        this.id=id;
        let resp = this.serviceJoueursServices.getplayerbyid(id);
        resp.subscribe( report => this.player = report)
        console.log("liste equipe avant");
        console.log(this.player)

    }
    public updatejoueurs(id: string, team : Joueur) {
          this.serviceJoueursServices.updatejoueur(id,team)
            .subscribe(data => {
              console.log("dkbd",data);
              this.player = new Joueur();
            }, error => console.log(error));
    }
    public deleteequipe(id : number , i : number){
       let resp = this.serviceJoueursServices.deletejoueur(id);
       console.log("resp");
       console.log(resp);
       resp.subscribe( data => this.dataSource.data = data);
       console.log("index "+ i+" deleted ");
       this.dataSource.data.splice(i);
       this.listejoueurs();
       window.location.reload();
    }
   async onSubmit() {
           this.submitted=true;
           await this.updatejoueurs(this.id,this.player);
       }
   onReset() {
         this.submitted = false;

   }
}
