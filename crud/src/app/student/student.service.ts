import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get("http://localhost:3000/student");
  }
  addData(data:any){
    return this.http.post("http://localhost:3000/student" ,data)
  }
  deleteData(id:number){
    return this.http.delete(`http://localhost:3000/student/${id}`)
  }
  getDataById(id:number){
    return this.http.get(`http://localhost:3000/student/${id}`)

  }
}
