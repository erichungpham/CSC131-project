import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css']
})
export class EmpInfoComponent implements OnInit {

  private _data: any = {};

  constructor(private employeeService: EmployeeService) {
  }

public get employee(): any {
  return this._data;
}

  ngOnInit() {
    this.employeeService.getEmployee(5).subscribe(res => {this._data = res;});
    }

}
