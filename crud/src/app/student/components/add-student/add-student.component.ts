import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit ,OnChanges{
 public studentForm !: FormGroup;
  
  studentData: Object | undefined;
  data: Object | undefined;

  @Input() name:any
  @Input() email:any
  @Input() subject:any
  @Input() percentage:any
  @Input() activity:any
  @Input() id:any
  
  constructor(private studentService :StudentService) { 
   
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.name);
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      
      name: new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      subject: new FormControl("",Validators.required),
      percentage: new FormControl("",Validators.required),
      activity: new FormControl("activity",Validators.required)
    })
  }

  ngOnChange(){
   
  }
  getStudentFormData(data:any){
    this.studentService.addData(data).subscribe((res)=>
    this.studentData=res)
    this.studentService.getData().subscribe((res)=>
    this.data=res)
    
  }
  receiveData(data: any){
console.log(data);
  }
 
  
}
