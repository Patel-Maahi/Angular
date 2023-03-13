import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttrDirectiveComponent } from './attr-directive/attr-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    AttrDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
