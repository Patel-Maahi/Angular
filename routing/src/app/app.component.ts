import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'routing';

  public limit:number=5;
  public totalbtn:any;
  public btnArr:number[]=[]
  public findex:any;
  public lindex:any;
  public newData:any;
  public data = [
    {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:2,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"virghjghhgen"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"viren"
  }
  ,
  {
    id:1,
    name:"viren"
  },
  {
    id:1,
    name:"vcbcvbcviren"
  },
] 
ngOnInit(): void {
    this.totalbtn = this.data.length/this.limit;
   for (let index = 1; index <= Math.ceil( this.totalbtn); index++) {
    this.btnArr.push(index)
    console.log(this.btnArr); 
    this.newData = this.data.filter(i=>this.data.indexOf(i)<=this.limit-1);  
   }    
}
showData(data:any){

this.findex = (data.target.value-1)*this.limit;
this.lindex = this.findex + this.limit - 1;
console.log(this.findex,this.lindex);
this.newData = this.data.filter(i=>this.data.indexOf(i)>=this.findex && this.data.indexOf(i)<=this.lindex);
}

}