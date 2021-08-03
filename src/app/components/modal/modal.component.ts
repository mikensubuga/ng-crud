import { Component, Injectable, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
@Injectable()
export class ModalComponent implements OnInit {
  @Input() title: string = "";
  @ViewChild('modal')
  private modalContent!: TemplateRef<ModalComponent>;
  private modalRef!: NgbModalRef;

  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    console.log("opened")

    //this.modalRef = this.modalService.open(this.modalContent, {ariaLabelledBy:'modal-basic-title'})
    this.modalRef = this.modalService.open(this.modalContent, {ariaLabelledBy:'modal-basic-title'})
    this.modalRef.componentInstance.name = "Add"
    //this.modalRef.result.then();
  }

  close() {
    this.modalRef.close()
    console.log("Closed")
  }

  dismiss() {
    this.modalRef.dismiss()
    console.log("Dismissed")

  }

}
