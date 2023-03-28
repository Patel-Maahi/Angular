import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  data: any;
  editData: Object | undefined;

  constructor(private studentService :StudentService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.studentService.getData().subscribe((res)=>
    this.data=res)
  }
  deleteStudent(id:number){
   this.studentService.deleteData(id).subscribe((res)=>console.log(res))
   this.studentService.getData().subscribe((res)=>
   this.data=res)
  }
  updateStudent(id:number){
    let studentId = this.route.snapshot.paramMap.get
    this.studentService.getDataById(id).subscribe((res)=>
    this.editData = res
    )
  }
}
