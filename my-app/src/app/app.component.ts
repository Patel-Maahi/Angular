import { Component } from '@angular/core';
import { Interface } from './interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public myClass:boolean=true
  public myStyle:string="sans-serif"
  public style1:string="1px solid gray"
  public style2:string="1px solid gray"
  public cols:number=3
  public bgColor:string="rgb(218, 181, 188)"
  public data : Interface = {
    fname:'Maahi',
    lname:'Patel',
    address:"Valsad",
    email:"maahipatel9111@gmail.com"
  }
  submitData(){
    console.log(`${this.data.fname }\n${this.data.lname}\n${this.data.address}\n${this.data.email}`); 
  }
}

