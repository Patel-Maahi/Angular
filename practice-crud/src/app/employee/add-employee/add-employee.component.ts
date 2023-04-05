import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit,OnChanges{
@Output() closeFormEvt = new EventEmitter()
public formNotVisible:boolean = false
@Output() addEmployee = new EventEmitter()
@Output() updateEmployee = new EventEmitter()
@Input() editData:any
changeBtn:boolean=false

  constructor() { }
  ngOnChanges() {
    if(this.editData){
      this.setFormValue()
      this.changeBtn=true
      
    }
  }

  employeeForm!: FormGroup
  ngOnInit(): void {
    this.employeeForm = new FormGroup ({
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      address:new FormControl(""),
      email:new FormControl(""),
      salary: new FormControl(""),
    })
    this.changeBtn=false
  }
  closeForm(){
this.closeFormEvt.emit(this.formNotVisible)
  }
addFormData(){
  this.addEmployee.emit(this.employeeForm.value)
  this.closeFormEvt.emit(this.formNotVisible)
}
setFormValue(){
  this.employeeForm.setValue({
    firstname:this.editData.firstname,
    lastname:this.editData.lastname,
    address:this.editData.address,
    email:this.editData.email,
    salary:this.editData.address

  })
}
updateFormData(){
  this.updateEmployee.emit(this.employeeForm.value)
  this.closeFormEvt.emit(this.formNotVisible)
}

}


