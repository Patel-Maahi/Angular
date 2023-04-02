import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input()foodArr:string[]=[]
@Output() foodDel=new EventEmitter<number>()

delFood(index:number){
  this.foodDel.emit(index)
}
}
