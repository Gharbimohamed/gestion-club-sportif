import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalequipe',
  templateUrl: './modalequipe.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modalequipe.component.css']
})
export class ModalequipeComponent  {

    constructor(private modalService: NgbModal) { }
    closeResult: string;
    openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    }
}
