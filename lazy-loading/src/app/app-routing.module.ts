import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KidsComponent } from './kids/kids/kids.component';
import { MenComponent } from './men/men/men.component';
import { WomenComponent } from './women/women/women.component';

const routes: Routes = [
  // {path:"men",component:MenComponent},
  {path:"men", loadChildren:()=>import('./men/men.module').then(m=>m.MenModule)},
  {path:"women",loadChildren:()=>import('./women/women.module').then(m=>m.WomenModule)},
   {path:"kids",loadChildren:()=>import('./kids/kids.module').then(m=>m.KidsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
