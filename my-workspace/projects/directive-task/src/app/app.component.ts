import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive-Task';
  public employeeHeader=[{id:"ID",name:"NAME",salary:"SALARY",action:"ACTION"}]
  public employee=[{id:1,name:"Maahi",salary:5000,boolean:false},{id:2,name:"Sweta",salary:7000,boolean:true},{id:3,name:"Nupur",salary:7000,boolean:true}]
   
selectedDay:string | undefined;
getDay(data:any) :void{
  console.log(data.target.value);
  this.selectedDay = data.target.value;
}

}
