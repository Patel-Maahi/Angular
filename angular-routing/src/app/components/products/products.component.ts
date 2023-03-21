import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public product=[{id:1,name:"Fruits"},{id:2,name:"Vegetable"},{id:3,name:"Chocolates"},{id:4,name:"Chips"},{id:5,name:"Coldrinks"}]
  constructor() { }

  ngOnInit(): void {
  }

}
