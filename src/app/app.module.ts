import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { TableComponent } from './table/table.component';

import { EmployeeService } from './employee.service';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpListComponent,
    EmpInfoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
