import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fruits-detail',
  templateUrl: './fruits-detail.component.html',
  styleUrls: ['./fruits-detail.component.css']
})
export class FruitsDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  public myid:any;
  ngOnInit(): void {
     this.myid=this.route.snapshot.paramMap.get('id')
     
     
  }


}
