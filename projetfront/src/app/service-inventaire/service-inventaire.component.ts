import { Router, ActivatedRoute } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { InventaireService } from '../services/inventaire.service';
import { Inventaire } from '../Model/inventaire';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-service-inventaire',
  templateUrl: './service-inventaire.component.html',
  styleUrls: ['./service-inventaire.component.css']
})
export class ServiceInventaireComponent implements AfterViewInit {
displayedColumns: string[] = ['id', 'date', 'descriptif','Modifier'];
 // niveau: string;
   submitted = false;
  id : string;
 constructor(private route: ActivatedRoute,
     private router: Router, private serviceInventaireServices: InventaireService, private modalService: NgbModal, private datePipe: DatePipe) { }
  closeResult: string;

  openVerticallyCentered(id: string, content) {
      this.modalService.open(content, { centered: true });

    this.listequipesupdate(id);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  async ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    await this.listeinventaire();

  }


  dataSource = new MatTableDataSource<Inventaire>();
  inventaire = new Inventaire();
  public listequipesupdate(id : string){
      this.id=id;
      let resp = this.serviceInventaireServices.getinventairebyid(id);
      resp.subscribe( report => {

      console.log(this.inventaire.date)
      console.log(report.date)
      this.inventaire = report
      console.log(this.inventaire)
      }
      )
      console.log("liste equipe avant");


  }
    async listeinventaire(){
    let resp = this.serviceInventaireServices.getinventaire();
    await resp.subscribe( report => {
    //this.datePipe.transform(report[0].date,"yyyy-MM-dd")
    this.dataSource.data = report

    console.log(this.dataSource.data)
    console.log(this.dataSource.data)

    })
    console.log("liste inventaire avant");
    console.log(this.dataSource.data)

    }
    public deleteinventaire(id : number , i : number){
         let resp = this.serviceInventaireServices.deleteinventaire(id);

         resp.subscribe( data => this.dataSource.data = data);
         console.log("index "+ i+" deleted ");
         this.dataSource.data.splice(i);
         this.listeinventaire();
         window.location.reload();
    }
  public updateressource(id: string, team : Inventaire) {
        this.serviceInventaireServices.updateressource(id,team)
          .subscribe(data => {
            console.log("dkbd",data);
            this.inventaire = new Inventaire();
          }, error => console.log(error));
  }
    async onSubmit() {
            this.submitted=true;
            await this.updateressource(this.id,this.inventaire);
        }
    onReset() {
          this.submitted = false;

    }

}
