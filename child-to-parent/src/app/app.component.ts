import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-to-parent';
  names: string[]=[];
  addNewName(name: string){
     this.names.push(name)
    console.log(this.names);
  }
}
