import { Component, OnInit } from '@angular/core';
import {EmployesServiceService} from "../services/employes-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../model/employee.model";

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.css']
})
export class SingleEmployeeComponent implements OnInit {

  employee = new Employee();
  VerifyEmailExist: boolean = false;

  constructor(private employeeService: EmployesServiceService,
              private router: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
   this.editAnEmployee();
  }

   editAnEmployee(){
     const email = this.router.snapshot.params['email'];
     this.employeeService.getEmployeeByEmail(email).then(
       (employee: Employee) => {
         this.employee = employee;
       },
       (error) => {
         console.log(error);
       }
     );
   }

  onModifyAndBack(){
    var result = confirm("You want to update this employee : "+this.employee.firstName);
    if (result){
    const email = this.router.snapshot.params['email'];
    this.employeeService.putEmployee(email, this.employee).then(
      () => {
        this.employeeService.getAllEmployees();
        this.route.navigate(['/employees']);
        console.log('Employee : ' +this.employee.firstName+ ' has been changed with success!')
      },
      (error) => {
        this.VerifyEmailExist = true;
        console.log(error);
      }
    );
    } else {
      this.route.navigate(['/employees']);
    }
    /**/
  }



}
