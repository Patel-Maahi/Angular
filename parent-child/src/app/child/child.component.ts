import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input()name!:string;
  // @Input()dob!:string
private _name!:string;
private _dob!:string;
  @Input()
 get name():string{
  return this._name;
 }
set name(val:string){
   this._name = val;
   if(val){
    this.uname = val.charAt(0).toUpperCase() + val.substring(1).toLowerCase()
  }
   
}

@Input()
get dob():string{
  return this._dob;
}
set dob(date:string){
  this._dob = date
  this.age = this.getAge(date);
  if(this.age>=10&&this.age<13){
    this.message="you are kid"
  }
  else if(this.age>=13&&this.age<18){
    this.message="you are teen"
  }
  else{
    this.message="you are mature"
  }
}

  age!:number;
  message!:string
  uname!:string

  constructor() { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['dob']){
  //     this.age= this.getAge(this.dob)
  //     if(this.age>=10&&this.age<13){
  //       this.message="you are kid"
  //     }
  //     else if(this.age>=13&&this.age<18){
  //       this.message="you are teen"
  //     }
  //     else{
  //       this.message="you are mature"
  //     }
  //   }
  // if(changes['name']&&changes['name'].currentValue ){
  //   this.uname = this.name.charAt(0).toUpperCase() + this.name.substring(1).toLowerCase();
  // }
  // }
  private getAge(dateOfBirth: string): number{
    let dob = new Date(dateOfBirth).getTime();
    let currentDate = new Date().getTime();
    return Math.floor((currentDate-dob)/(1000*60*60*24*365))
  }

}
