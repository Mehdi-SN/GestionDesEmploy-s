import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule} from "@angular/common/http";
import {EmployesServiceService} from "./services/employes-service.service";
import { NavigationComponent } from './navigation/navigation.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {FormsModule} from "@angular/forms";
import { SingleEmployeeComponent } from './single-employee/single-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    NavigationComponent,
    AddEmployeeComponent,
    SingleEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmployesServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
