import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() firstname:any
 @Input() lastname:any
 @Input() topics:any
  constructor() { }
  ngOnChanges(): void {
  
   
  }

  ngOnInit(): void {
  }

}
