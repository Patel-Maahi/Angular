import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsDetailComponent } from './product/fruits-detail/fruits-detail.component';
import { FruitsComponent } from './product/fruits/fruits.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path:"product-list",component:ProductListComponent },
  { path:"product-details/:id",component: ProductDetailsComponent},
  {path:"fruits",component:FruitsComponent},
  {path:"fruits-detail/:id",component:FruitsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
