import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  templateUrl: './attr-directive.component.html',
  styleUrls: ['./attr-directive.component.css']
})
export class AttrDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myClass:boolean=false;
  // multiClass={
  //   color:true,
  //   background-color:true,
  //   font-size:true
  // };
 
  
}
