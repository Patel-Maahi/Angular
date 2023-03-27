import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public data:any
  constructor(private service:CrudService) { }

  ngOnInit(): void {
    this.data=this.service.getData()
  }
deleteEmp(id:any){
  this.data = this.service.deleteEmployee(id)
 
}
}
