import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginHeader = "Welcome. Please login.";
  user = {
      name: "admin",
      password: "password"
  };

  auth(){
  if(this.user.name == 'admin' && this.user.password == 'password'){
          alert('you are logged in');
  }
      else{
          alert('wrong login');
      }
  }

  constructor() { }

  ngOnInit() {
  }

}
