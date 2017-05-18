import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(username, password) {
    if (username === 'admin' && password === 'password') {
            return true;
    } else {
            return false;
    }
  }

}
