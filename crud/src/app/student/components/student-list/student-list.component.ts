import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  data: any;
  editData: Object | undefined;

  constructor(private studentService :StudentService ) { }

  ngOnInit(): void {
    this.studentService.getData().subscribe((res)=>
    this.data=res)
  }
  deleteStudent(id:number){
   this.studentService.deleteData(id).subscribe((res)=>console.log(res))
   this.studentService.getData().subscribe((res)=>
   this.data=res)
  }
  @Output()
  sendEditData = new EventEmitter();
  // updateStudent(id:number){
  //   this.studentService.getDataById(id).subscribe((res)=>
  //   this.editData = res
  //   )
  //   this.sendEditData.emit(this.editData)
  // }
  // }
}
