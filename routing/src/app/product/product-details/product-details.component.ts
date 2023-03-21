import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public fruits=[{id:1,name:"Apple"},{id:2,name:"Cherry"},{id:3,name:"Mango"},{id:4,name:"Pineapple"},{id:5,name:"Guava"}]
  constructor(private route:ActivatedRoute) { }
  public myid:any;
  ngOnInit(): void {
     this.myid=this.route.snapshot.paramMap.get('id')
     
     
  }

}
