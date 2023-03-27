import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
public data = [{id:1,name:"Maahi",salary:5000,technology:'Angular',email:'maahi@gmail.com',password:'maahi',confirmPassword:'maahi'},
{id:2,name:"Maahi",salary:5000,technology:'Angular',email:'maahi@gmail.com',password:'maahi',confirmPassword:'maahi'},
{id:3,name:"Maahi",salary:5000,technology:'Angular',email:'maahi@gmail.com',password:'maahi',confirmPassword:'maahi'},
{id:4,name:"Maahi",salary:5000,technology:'Angular',email:'maahi@gmail.com',password:'maahi',confirmPassword:'maahi'},
{id:5,name:"Maahi",salary:5000,technology:'Angular',email:'maahi@gmail.com',password:'maahi',confirmPassword:'maahi'},
{id:6,name:"Maahi",salary:5000,technology:'Angular',email:'maahi@gmail.com',password:'maahi',confirmPassword:'maahi'},
{id:7,name:"Maahi",salary:5000,technology:'Angular',email:'maahi@gmail.com',password:'maahi',confirmPassword:'maahi'},
{id:8,name:"Maahi",salary:5000,technology:'Angular',email:'maahi@gmail.com',password:'maahi',confirmPassword:'maahi'},]
 public parseData: any;
  deleteDataId: any;
  localData: any;
  newObj: any;
  
  constructor() { }
public returnData:any
public deleteEmp:any   
getData(){
  if(localStorage.length==0){
    localStorage.setItem("name",JSON.stringify(this.data))
    return this.data
  }
  else{
this.returnData = localStorage.getItem("name")
return JSON.parse(this.returnData)
  }
}
deleteEmployee(id:any){
this.returnData= localStorage.getItem("name")
console.log(this.returnData);
this.parseData = JSON.parse(this.returnData)
console.log(this.parseData);
this.deleteDataId = this.parseData.find((element: { id: any; })=>element.id == id)
console.log(this.deleteDataId);
 this.parseData.splice(this.parseData.indexOf(this.deleteDataId),1)

localStorage.setItem("name",JSON.stringify(this.parseData))
 this.returnData = localStorage.getItem("name")
 return JSON.parse(this.returnData)
}
addEmployee(data:any){
this.localData = localStorage.getItem('name')
this.newObj = JSON.parse(this.localData)
this.newObj.push(data)
localStorage.setItem("name",JSON.stringify(this.newObj))
}

}

