import { Component, OnInit, Output } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
public isFormVisible:boolean = false
  public employeeData: any;
  deleteData: any ;
  editData: any;
  id: any;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeData()
  }
  formVisible(event:boolean){
    this.isFormVisible = event

  }
  formNotVisible(event:boolean){
this.isFormVisible = event
  }
  getEmployeeData(){
    this.employeeService.getEmployee().subscribe((res)=>this.employeeData=res)
  }
  
  addEmployeeData(data:Employee){
this.employeeService.addEmployee(data).subscribe((res)=>res)
this.getEmployeeData()
  }
deleteEmployeeData(id:Employee){
this.employeeService.deleteEmployee(id).subscribe((res)=>res)
this.getEmployeeData()
}
 getEditEmployeeData(id:Employee){
  this.id = id
this.employeeService.getEmployeeById(id).subscribe((res)=>this.editData=res)
console.log(this.editData);

 }
 updateEmployeeData(data:Employee){
  this.employeeService.updateEmployee(this.id,data).subscribe((res)=>res)
  this.getEmployeeData()
 }

}
