import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-forms';
  topics=['Angular','React','Vue'];
  form: NgForm | undefined;
  
   onSubmit(form:NgForm){
 console.log(form);
   }
  setDefaultValues(){
     this.form?.form.patchValue({
      conditions:true,
      email:'abc@gmail.com',
      name:'maahi',
      topics:'Angular'
     })
  }
}
