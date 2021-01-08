import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modaltrainer',
  templateUrl: './modaltrainer.component.html',
  styleUrls: ['./modaltrainer.component.css']
})
export class ModaltrainerComponent {

constructor(private modalService: NgbModal) { }
    closeResult: string;
    openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
    }
}
