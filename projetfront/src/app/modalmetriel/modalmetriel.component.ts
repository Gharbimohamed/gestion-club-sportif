import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modalmetriel',
  templateUrl: './modalmetriel.component.html',
  styleUrls: ['./modalmetriel.component.css']
})
export class ModalmetrielComponent  {

      constructor(private modalService: NgbModal) { }
      closeResult: string;
      openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
      }

}
