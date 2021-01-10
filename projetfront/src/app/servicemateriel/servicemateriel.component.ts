import { Router, ActivatedRoute } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MaterielsPedagogiqueService } from '../services/materiels-pedagogique.service';
import { MaterielsPedagogique } from '../Model/Materiels-pedagogique';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery'
@Component({
  selector: 'app-servicemateriel',
  templateUrl: './servicemateriel.component.html',
  styleUrls: ['./servicemateriel.component.css']
})
export class ServicematerielComponent implements AfterViewInit {
displayedColumns: string[] = ['id', 'nom_materiel', 'date_ajout', 'type_matteriel','quantite','Action','Modifier'];
  niveau: string;
   submitted = false;
   id : string;
   materiel = new MaterielsPedagogique();
 constructor(private route: ActivatedRoute,
     private router: Router, private materielpedagogiqueServices: MaterielsPedagogiqueService, private modalService: NgbModal) { }
closeResult: string;
openVerticallyCentered(id: string, content) {
      this.modalService.open(content, { centered: true });

      this.listequipesupdate(id);
  }

    public listequipesupdate(id : string){
        this.id=id;
        let resp = this.materielpedagogiqueServices.getmaterielbyid(id);
        resp.subscribe( report => {

       // console.log(this.materiel.date)
        console.log(report.date)
        this.materiel = report
        console.log(this.materiel)
        }
        )
        console.log("liste equipe avant");


    }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listemateriels();

  }


  dataSource = new MatTableDataSource<MaterielsPedagogique>();
  public listemateriels(){
  let resp = this.materielpedagogiqueServices.getmateriels();
  resp.subscribe( report => this.dataSource.data = report)
  console.log("liste equipe avant");
  console.log(this.dataSource.data)

  }
  public deleteequipe(id : number , i : number){
         let resp = this.materielpedagogiqueServices.deletemateriel(id);
         console.log("resp");
         console.log(resp);
         resp.subscribe( data => this.dataSource.data = data);
         console.log("index "+ i+" deleted ");
         this.dataSource.data.splice(i);
         this.listemateriels();
         window.location.reload();
  }
    public updateressource(id: string, team : MaterielsPedagogique) {
          this.materielpedagogiqueServices.updatemateriel(id,team)
            .subscribe(data => {
              console.log("dkbd",data);
              this.materiel= new MaterielsPedagogique();
            }, error => console.log(error));
    }
      async onSubmit() {
              this.submitted=true;
              await this.updateressource(this.id,this.materiel);
          }
      onReset() {
            this.submitted = false;

      }
}
