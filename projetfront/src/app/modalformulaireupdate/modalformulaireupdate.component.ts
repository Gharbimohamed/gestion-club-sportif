import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceEquipeService } from '../services/service-equipe.service';
import { ServiceEntraineurService } from '../services/service-entraineur.service';
import { Equipe } from '../Model/equipe';
import { Entraineur } from '../Model/entraineur';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalformulaireupdate',
  templateUrl: './modalformulaireupdate.component.html',
  styleUrls: ['./modalformulaireupdate.component.css']
})
export class ModalformulaireupdateComponent implements OnInit {

 constructor(private modalService: NgbModal) { }
    closeResult: string;
    openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    }
  ngOnInit(): void {
  }

}
