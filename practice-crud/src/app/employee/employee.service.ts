import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }

  getEmployee(){
    return this.httpClient.get('http://localhost:3000/employee')
  }
  addEmployee(employeeData:Employee){
    return this.httpClient.post('http://localhost:3000/employee',employeeData)
  }
  deleteEmployee(id:Employee){
    return this.httpClient.delete(`http://localhost:3000/employee/${id}`)
  }
  updateEmployee(id:Employee , employeeData:Employee ){
    return this.httpClient.put(`http://localhost:3000/employee/${id}` ,employeeData )
  }
  getEmployeeById(id:Employee){
    return this.httpClient.get(`http://localhost:3000/employee/${id}`)
  }
}
