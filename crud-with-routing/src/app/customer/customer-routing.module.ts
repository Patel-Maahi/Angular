import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

const routes: Routes = [
   {path:'',redirectTo:"customer-list",pathMatch:'full'},
  {path:"customer-list" , component:CustomerListComponent},
  {path:"add-customer/:id",component:AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
