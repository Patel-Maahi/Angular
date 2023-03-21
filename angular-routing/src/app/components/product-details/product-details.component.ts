import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
my: any;
myname: any;

  constructor(private route : ActivatedRoute) { }
  public myid:any;
  ngOnInit(): void {
     this.myid=this.route.snapshot.paramMap.get('id')
  }
}
