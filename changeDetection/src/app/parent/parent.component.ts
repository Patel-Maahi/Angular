import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  @Input()myName:any
  @Input()myObj:any
  constructor() { }
parent(){
  console.log("parent called");
  
}
  ngOnInit(): void {
  }

}
