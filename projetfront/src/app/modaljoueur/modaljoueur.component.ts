import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modaljoueur',
  templateUrl: './modaljoueur.component.html',
  styleUrls: ['./modaljoueur.component.css']
})
export class ModaljoueurComponent {

    constructor(private modalService: NgbModal) { }
    closeResult: string;
    openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    }

}
