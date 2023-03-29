import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
customerForm: any;
  editdata: any;
  editDataId: any;
  changeBtn:boolean=false
  

  constructor(private customerService : CustomerService , private route : Router ,private routes : ActivatedRoute ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl(""),
      email:new FormControl(""),
      address: new FormControl(""),
      contact: new FormControl("")
    })
    this.editDataId = this.routes.snapshot.paramMap.get('id')
    if (this.editDataId != "") {
      this.customerService.getDataById(this.editDataId).subscribe((res)=> { this.editdata= res ;  this.customerForm.setValue({
        name:this.editdata.name,
        email:this.editdata.email,
        address:this.editdata.address,
        contact:this.editdata.contact
      })})
      this.changeBtn=true;
    }
   
  }
  addCustomerData(){
    if(!this.changeBtn){
      this.customerService.postData(this.customerForm.value).subscribe((res)=>console.log(res))
      this.customerService.getData().subscribe((res)=>res)
      this.customerForm.reset()
      this.route.navigate(['customer-list'])
    }
    else{
      this.customerService.putData(this.customerForm.value,this.editDataId).subscribe((res)=>console.log(res))
    this.customerService.getData().subscribe((res)=>res)
    this.customerForm.reset()
     this.route.navigate(['customer-list'])

    }
    
    
  }
  

}
