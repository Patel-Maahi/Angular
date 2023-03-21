import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public product=[{id:1,name:"Product1"},{id:2,name:"Product2"},{id:3,name:"Product3"},{id:4,name:"Product4"},{id:5,name:"Product5"}]
  constructor() { }

  ngOnInit(): void {
  }

}
