import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  empForm!: FormGroup ;
  length: any;
  
  constructor(private service: CrudService , private router :Router ) { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      id: new FormControl ( this.length + 1),
      name: new FormControl("",Validators.required),
      salary: new FormControl("",Validators.required),
      technology: new FormControl("",Validators.required),
      email: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
      confirmpassword: new FormControl("",Validators.required)



    })
  }
  submit(){
    this.service.addEmployee(this.empForm.value)
    this.router.navigate(['/employee/employeeList'])
  }

}
