import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsComponent } from './kids/kids.component';

const routes: Routes = [
  {path:"kids",component:KidsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
