import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceEquipeService } from '../services/service-equipe.service';
import { Equipe } from '../Model/equipe';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements AfterViewInit{
    displayedColumns: string[] = ['id_equipe', 'niveau', 'age_inf', 'age_sup','nombre_joueurs','Action','Modifier'];
  constructor( private serviceEquipeServices: ServiceEquipeService ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listequipes();
  }


   dataSource = new MatTableDataSource<Equipe>();
  public listequipes(){
  let resp = this.serviceEquipeServices.getequipes();
  resp.subscribe( report => this.dataSource.data = report)
  }
}




