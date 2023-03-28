import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 public studentForm !: FormGroup;
  
  studentData: Object | undefined;
  data: Object | undefined;
  
  constructor(private studentService :StudentService) { }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      
      name: new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      subject: new FormControl("",Validators.required),
      percentage: new FormControl("",Validators.required),
      activity: new FormControl("",Validators.required)
    })
  }
  getStudentFormData(data:any){
    this.studentService.addData(data).subscribe((res)=>
    this.studentData=res)
    this.studentService.getData().subscribe((res)=>
    this.data=res)
    
  }
}
