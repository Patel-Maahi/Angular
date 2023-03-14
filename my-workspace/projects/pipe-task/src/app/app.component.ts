import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-task';
  studentHeader=[{id:"ID",name:"NAME",salary:"SALARY"}]
  student = [{id:1,name:"Maahi",subject:"Maths"},{id:2,name:"Sweta",subject:"Science"},{id:3,name:"Nupur",subject:"English"},{id:4,name:"Diya",subject:"Maths"}]
  myStyle:string="1px solid black"
  myClass:boolean=true
  dataSearch:string=""
}
