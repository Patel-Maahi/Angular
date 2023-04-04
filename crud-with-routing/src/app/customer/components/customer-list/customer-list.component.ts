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
  selectAddress:any[] | undefined  
  filteredData: any = '';

  constructor(private customerService : CustomerService , private route : Router ) { }

  ngOnInit(): void {
    this.selectAddress=[ {value:'address', Name:'Address'},
    {value:'vapi', Name:'Vapi'},
    {value:'valsad', Name:'Valsad'},
    {value:'udvada', Name:'Udvada'}
      ]
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
   filterCustomer(event: any){
    this.filteredData = event.target.value
     this.customerData = this.customerData.filter((res: { address: { value: any; }; })=>{ return  res.address==this.filteredData||this.filteredData=='address'},
      console.log(this.customerData)
      
     )
    console.log();
    
    
   }
   sortCustomer(){
    this.customerData = this.customerData.sort((a: any,b: any)=>{return(a.productQuantity-b.productQuantity)})
    console.log(this.customerData);
    
   }

}
