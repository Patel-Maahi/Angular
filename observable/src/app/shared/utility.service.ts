import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  printData(id:any,data:any){
    let li = document.createElement('li')
    let text= document.createTextNode(data)
    li.appendChild(text)
    document.getElementById(id)?.appendChild(li)
  }
}
