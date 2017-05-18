import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginHeader = 'Welcome. Please login.';
  user = {
      name: 'admin',
      password: 'password'
  };

    constructor( private loginService: LoginService) {}

  auth() {
    if (this.loginService.login(this.user.name, this.user.password)) {
        alert('You are logged in!');
    } else {
        alert('You are a failure!');
    }
  }

  ngOnInit() {
  }

}
