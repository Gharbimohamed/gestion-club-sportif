import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalinventaire',
  templateUrl: './modalinventaire.component.html',
  styleUrls: ['./modalinventaire.component.css']
})
export class ModalinventaireComponent {

    constructor(private modalService: NgbModal) { }
    closeResult: string;
    openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    }


}
