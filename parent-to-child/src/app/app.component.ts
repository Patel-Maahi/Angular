import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-to-child';
 
    name:string | undefined
    lastname:string | undefined;
    topics:string | undefined
  
 
  

  passValue(a:any,b:any,c:any): void{
    
    this.name = a,
    this.lastname = b,
    this.topics =c
    
    
  }
}
