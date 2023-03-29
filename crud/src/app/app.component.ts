import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  name:any
email:any
subject:any
percentage:any
activity:any
id:any
  sendEditData(item:any){

this.name=item.name,
this.email=item.email,
this.subject=item.subject,
this.percentage=item.percentage,
this.activity=item.activity,
this.id=item.id
  }
}
