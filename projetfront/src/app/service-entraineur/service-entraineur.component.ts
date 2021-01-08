import { Router, ActivatedRoute } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceEntraineurService } from '../services/service-entraineur.service';
import { Entraineur } from '../Model/entraineur';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-service-entraineur',
  templateUrl: './service-entraineur.component.html',
  styleUrls: ['./service-entraineur.component.css']
})
export class ServiceEntraineurComponent implements AfterViewInit {
displayedColumns: string[] = ['id_personne', 'nom', 'prenom', 'age','exeprience','Modifier'];
 constructor(private route: ActivatedRoute, private modalService: NgbModal,
     private router: Router, private serviceEquipeServices: ServiceEntraineurService) { }
   submitted = false;
   id : string;
   entraineur = new Entraineur();
@ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listentraineurs();
  }

   dataSource = new MatTableDataSource<Entraineur>();
  public  listentraineurs(){
  let resp =  this.serviceEquipeServices.getentraineurs();
  resp.subscribe( report => this.dataSource.data = report)
  console.log(this.dataSource);

  }
  public listequipesupdate(id : string){
    this.id=id;
    let resp = this.serviceEquipeServices.trainerbyid(id);
    resp.subscribe( report => this.entraineur = report)
    console.log("liste equipe avant");
    console.log(this.entraineur)

  }
      openVerticallyCentered(id: string, content) {
            this.modalService.open(content, { centered: true });

            this.listequipesupdate(id);
      }
  public updateEquipe(id: string, team : Entraineur) {
      this.serviceEquipeServices.updatetrainer(id,team)
        .subscribe(data => {
          console.log("dkbd",data);
          this.entraineur = new Entraineur();
        }, error => console.log(error));
  }
  async onSubmit() {
            this.submitted=true;
            await this.updateEquipe(this.id,this.entraineur);
  }
  onReset() {
          this.submitted = false;

  }


}
