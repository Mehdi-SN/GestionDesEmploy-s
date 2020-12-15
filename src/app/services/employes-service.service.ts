import { Injectable } from '@angular/core';
import {Employee} from "../model/employee.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployesServiceService {


  public baseUrl = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) {
  }


  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  postAnEmployee(employee: Employee) {
    return new Promise((resolve, reject) => {
      this.http.post(`${this.baseUrl}/employees`, employee).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  deleteAnEmployee(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.baseUrl}/employees/` + id).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    })
  }
  getEmployeeByEmail(email:string){
    return new Promise((resolve,reject)=> {
      this.http.get<Employee>(`${this.baseUrl}/employees/` + email).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
      }
      )
    })
  }
  putEmployee(email: string, employee: Employee){
    return new Promise((resolve, reject) =>  {
      this.http.put(`${this.baseUrl}/employees/` + email, employee).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      )
    });
  }


}
