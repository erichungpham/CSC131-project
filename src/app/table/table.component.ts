import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private _data: any = [];

  constructor(private employeeService: EmployeeService) { }

  public get employees(): any {
    return this._data;
  }

  ngOnInit() {
     this.employeeService.getManagedEmployees(5).subscribe(res => { this._data = res; });
     console.log(this._data);
  }

}
