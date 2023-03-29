import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerData: any | undefined;
  editdata: Object | undefined;
  myid: any;

  constructor(private customerService : CustomerService , private route : Router ) { }

  ngOnInit(): void {
    this.customerService.getData().subscribe((res)=>
     this.customerData=res)
  }
  deleteCustomer(id:any){
    this.customerService.deleteData(id).subscribe((res)=> res)
    this.customerService.getData().subscribe((res)=>
     this.customerData=res)
  }
  addCustomer(){
    this.route.navigate(['add-customer',""])
  }
  editData(id:any){
    this.route.navigate(['add-customer',id])
  }
}
