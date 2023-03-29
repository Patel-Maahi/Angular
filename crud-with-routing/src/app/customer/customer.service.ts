import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
 getData(){
   return this.http.get("http://localhost:3000/customer")
 }
 postData(data:any){
  return this.http.post("http://localhost:3000/customer" , data)
 }
 deleteData(id:number){
  return this.http.delete(`http://localhost:3000/customer/${id}`)
 }
 getDataById(id:number){
  return this.http.get(`http://localhost:3000/customer/${id}`)
 }
 putData(data:any , id:any){
  return this.http.put(`http://localhost:3000/customer/${id}`, data )
 }
}
