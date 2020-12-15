import { Component, OnInit } from '@angular/core';
import {Employee} from "../model/employee.model";
import {NgForm} from "@angular/forms";
import {EmployesServiceService} from "../services/employes-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  userExist = false;

  constructor(private employeeService: EmployesServiceService,
              private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.employee.firstName = form.value['firstName'];
    this.employee.lastName = form.value['lastName'];
    this.employee.email = form.value['email'];
    this.employeeService.postAnEmployee(this.employee).then(
      () => {
        this.router.navigate(['/employees']);
        this.employeeService.getAllEmployees();
      },
      (error) => {
        this.userExist = true;
        console.log(error);
      }
    );

  }

}
