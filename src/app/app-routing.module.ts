import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {SingleEmployeeComponent} from "./single-employee/single-employee.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: '', redirectTo: 'employees',pathMatch: 'full'},
  {path: 'create-employee', component:AddEmployeeComponent},
  {path: 'employees/view/:email', component:SingleEmployeeComponent},
  {path: '**', redirectTo: 'employees'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
