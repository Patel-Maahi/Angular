import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'changeDetection';
  Name:string = 'Maahi'
  Obj={
    id:1,
    name:'Nupur'
  }
  updateName(){
    this.Name = "Sweta"
  }
  updateObj(){
    this.Obj.name ='Raj'
  }
  app(){
    console.log("app called");
    
  }
}
