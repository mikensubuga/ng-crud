import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { dataType } from '../../dataType';
import { CrudService} from '../../services/crud-service.service'
//import { CrudService } from 'src/app/services/crud-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {
  data: dataType[] = [];
  name= "";
  number="";
  location="";
  @Output() addCompany: EventEmitter<dataType> = new EventEmitter()
  @Input() title ="";

  constructor(private crudServices: CrudService) { }

  ngOnInit(): void {
    this.crudServices.getData()
    .subscribe((list) => (this.data = list ));
  }

  onSubmit(){
    console.log('on submit')

    const newCompany = {
      id: this.data.length++,
      name: this.name,
      number: this.number,
      location : this.location
    }

    console.log("Submitted", newCompany)
    this.addCompany.emit(newCompany);

    this.name = '';
    this.number = '';
    this.location = '';

  }
}
