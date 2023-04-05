import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
@Output() openFormEvent = new EventEmitter()
@Input() employeeData:any
@Output() deleteDataEvt = new EventEmitter()
@Output() editDataEvt  = new EventEmitter()

public formVisible:boolean = true
  constructor() { }

  ngOnInit(): void {
  }
  openForm(){
    this.openFormEvent.emit(this.formVisible)
  }
  deleteEmployee(id:Employee){
    this.deleteDataEvt.emit(id)
  }
  editEmployee(id:Employee){
    this.openFormEvent.emit(this.formVisible)
    this.editDataEvt.emit(id)
  }

}
