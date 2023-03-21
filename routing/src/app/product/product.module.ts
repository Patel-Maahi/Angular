import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitsDetailComponent } from './fruits-detail/fruits-detail.component';



@NgModule({
  declarations: [
   // ProductListComponent,
    // ProductDetailsComponent
  
    FruitsComponent,
   FruitsDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
