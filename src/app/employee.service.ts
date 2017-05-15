import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  getEmployee(id){
    return this.http.get(`/api/employee/${id}`)
      .map((res: Response) => res.json());
  }

  postEmployee(employee){
    return this.http.post(`/api/employee/`, employee)
      .map((res: Response) => res.json());
  }

}
