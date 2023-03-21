import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    SearchPipePipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchPipePipe,
    FilterPipe
    
  ]
})
export class SharedModule { }
