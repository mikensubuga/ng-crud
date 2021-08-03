import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() title="";
  @Input() content = "";
  @Output() addItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.addItem.emit();
    console.log("You clicked a button")
  }
}
