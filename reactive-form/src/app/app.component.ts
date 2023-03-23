import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactive-form';
  reactiveForm!: FormGroup ;
  
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firtsname: new FormControl("",Validators.required),
      lastname: new FormControl("",Validators.required),
      email: new FormControl("",[Validators.required,Validators.email,Validators.pattern("[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
      country: new FormControl("",Validators.required),
      gender: new FormControl("",Validators.required),
      hobbies: new FormControl("")
    })
  }
  onSubmit(){
    console.log(this
      .reactiveForm);
    
  }


}
