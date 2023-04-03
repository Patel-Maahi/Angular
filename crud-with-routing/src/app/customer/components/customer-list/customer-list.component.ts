import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerData: any | undefined = []
  editdata: Object | undefined;
  myid: any;
  name: any;
  address:any

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
  search(){
    if(this.name==""){
      this.ngOnInit();
    }
    else{
      this.customerData = this.customerData.filter((res: { name: string; })=>{
        return res.name.toLowerCase().match(this.name.toLowerCase())
      })
    }
  }
   filterCustomer(evt: any){
    //  this.customerData = this.customerData.filter((res: { address: { value: any; }; })=>{
    //    return res.address.value == this.address.value

    //  })

    console.log(evt.target.value);
    
  
  
   }
   sortCustomer(){
    this.customerData = this.customerData.sort((a: any,b: any)=>{return (a.id-b.id)})
    console.log(this.customerData);
    
   }

}
