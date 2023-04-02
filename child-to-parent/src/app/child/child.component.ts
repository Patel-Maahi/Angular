import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output() foodEvnt:EventEmitter<string> = new EventEmitter<string>()

addName(name: string | undefined): void{
  this.foodEvnt.emit(name)
}
}
