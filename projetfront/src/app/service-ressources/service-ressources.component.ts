import { Router, ActivatedRoute } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RessourceService } from '../services/ressource.service';
import {Ressource } from '../Model/ressource';

@Component({
  selector: 'app-service-ressources',
  templateUrl: './service-ressources.component.html',
  styleUrls: ['./service-ressources.component.css']
})
export class ServiceRessourcesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nom_ressource', 'type_ressource', 'montant','Action','Modifier'];
  constructor(private route: ActivatedRoute, private router: Router, private ressourceServices: RessourceService) {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listressource();
  }

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
}
