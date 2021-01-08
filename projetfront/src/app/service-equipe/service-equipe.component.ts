
import { Router, ActivatedRoute } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceEquipeService } from '../services/service-equipe.service';
import { Equipe } from '../Model/equipe';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
@Component({
  selector: 'app-service-equipe',
  templateUrl: './service-equipe.component.html',
  styleUrls: ['./service-equipe.component.css']
})
export class ServiceEquipeComponent implements AfterViewInit {
 displayedColumns: string[] = ['id_equipe', 'niveau', 'age_inf', 'age_sup','nombre_joueurs','Modifier'];
  niveau: string;
   submitted = false;
   id : string;
 constructor(private route: ActivatedRoute,
     private router: Router, private serviceEquipeServices: ServiceEquipeService, private modalService: NgbModal) { }
  closeResult: string;

  openVerticallyCentered(id: string, content) {
      this.modalService.open(content, { centered: true });

      this.listequipesupdate(id);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listequipes();

  }


  dataSource = new MatTableDataSource<Equipe>();
  team : Equipe;
  public listequipesupdate(id : string){
    this.id=id;
    let resp = this.serviceEquipeServices.getequipebyid(id);
    resp.subscribe( report => this.team = report)
    console.log("liste equipe avant");
    console.log(this.team)

  }
  public updateEquipe(id: string, team : Equipe) {
      this.serviceEquipeServices.updateEquipe(id,team)
        .subscribe(data => {
          console.log("dkbd",data);
          this.team = new Equipe();
        }, error => console.log(error));
  }
  public listequipes(){
  let resp = this.serviceEquipeServices.getequipes();
  resp.subscribe( report => this.dataSource.data = report)
  console.log("liste equipe avant");
  console.log(this.dataSource.data)

  }
  public deleteequipe(id : number , i : number){
   let resp = this.serviceEquipeServices.deletequip(id);
   console.log("resp");
   console.log(resp);
   resp.subscribe( data => this.dataSource.data = data);
   console.log("index "+ i+" deleted ");
   this.dataSource.data.splice(i);
   this.listequipes();
   window.location.reload();
  }
  async onSubmit() {
          this.submitted=true;
          await this.updateEquipe(this.id,this.team);
      }
  onReset() {
        this.submitted = false;

  }



}
