import { Router, ActivatedRoute } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RessourceService } from '../services/ressource.service';
import {Ressource } from '../Model/ressource';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-service-ressources',
  templateUrl: './service-ressources.component.html',
  styleUrls: ['./service-ressources.component.css']
})
export class ServiceRessourcesComponent implements AfterViewInit {
   submitted = false;
      id : string;
  displayedColumns: string[] = ['id', 'nom_ressource', 'type_ressource', 'montant','Action','Modifier'];
  constructor(private route: ActivatedRoute, private router: Router, private ressourceServices: RessourceService, private modalService: NgbModal) {
  }
  openVerticallyCentered(id: string, content) {
      this.modalService.open(content, { centered: true });

      this.listequipesupdate(id);
  }
    public listequipesupdate(id : string){
      this.id=id;
      let resp = this.ressourceServices.getressbyid(id);
      resp.subscribe( report => this.team = report)
      console.log("liste equipe avant");
      console.log(this.team)

    }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listressource();
  }
  team : Ressource;
  dataSource = new MatTableDataSource<Ressource>();
  public  listressource(){
    let resp =  this.ressourceServices.getressources();
    resp.subscribe( report => {this.dataSource.data = report
    console.log("dnjfg",report);
    })

  }
  public deleteressources(id : number , i : number){
     let resp = this.ressourceServices.deleteressource(id);
     console.log("resp");
     console.log(resp);
     resp.subscribe( data => this.dataSource.data = data);
     console.log("index "+ i+" deleted ");
     this.dataSource.data.splice(i);
     this.listressource();
     window.location.reload();
  }
  public updateressource(id: string, team : Ressource) {
        this.ressourceServices.updateressource(id,team)
          .subscribe(data => {
            console.log("dkbd",data);
            this.team = new Ressource();
          }, error => console.log(error));
  }
    async onSubmit() {
            this.submitted=true;
            await this.updateressource(this.id,this.team);
        }
    onReset() {
          this.submitted = false;

    }


}
