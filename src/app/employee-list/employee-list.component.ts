import { Component, OnInit, OnDestroy } from '@angular/core';
import {Employee} from "../model/employee.model";
import {EmployesServiceService} from "../services/employes-service.service";
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

 public employees:Employee[] = [];
  public employee = new Employee();

  constructor(private employeeService: EmployesServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data;
      }
    );
  }
  public deleteEmployee(id: number){
    var result = confirm("Want to delete ?");
    if (result){
    this.employeeService.deleteAnEmployee(id).then(
      (response) => {
        console.log('this employee has been successfully deleted ! : ');
        this.getEmployees();
      },
      (error) => {
        console.log(error);
      }
    );
    } else {
      this.getEmployees();
    }

  }


  public onViewEmployee(email:string){
    this.router.navigate(['/employees/view', email]);
    console.log('View employee Success!');
  }

}
