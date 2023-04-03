import { Component } from '@angular/core';
import { from, map, mergeAll, mergeMap, of} from 'rxjs';
import { UtilityService } from './shared/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable';
  public names = ['Maahi','Sweta','Nupur']
  public users$ = from(this.names)

  constructor(private utilityservice:UtilityService){}

  ngOnInit():void{
    
    //with map operator
    this.users$.pipe(map(res=>this.getData(res))).subscribe(res=>res.subscribe(res=>{this.utilityservice.printData('map',res)}))

//with map+mergeAll
this.users$.pipe(map((res)=>this.getData(res)),mergeAll()).subscribe((res)=>{this.utilityservice.printData('mapMergeAll',res)})

//with mergeMap
this.users$.pipe(mergeMap(res=>this.getData(res))).subscribe((res)=>{this.utilityservice.printData('mergeMap',res)})
  
}
getData(data: any){
  return  of(data)
}
}
