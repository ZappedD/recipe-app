import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  private user;
  private credentials;
  public result;

  constructor(public loginService: LoginService) {
    this.result = null;
  }

  ngOnInit() {
    this.result = null;

    this.user = localStorage.getItem('username');
  }
  public loginUser(data) {
    this.result = null;
    let username : string = (<HTMLInputElement>document.getElementById('username')).value;
    let password : string = (<HTMLInputElement>document.getElementById('password')).value;
    console.log(data);
    console.log(username, password);

    this.credentials = 'Basic ' + btoa(username + ':' + password);
    localStorage.setItem('loggedIn', this.credentials);

     this.loginService.loginCredentials(this.credentials).subscribe(result => {
      localStorage.setItem('username', username);
      this.result = true;
    }, error => {
      localStorage.clear();
      this.result = false;
    });

    this.user = localStorage.getItem('username');
    this.loginService.setUsername(this.user);
  }

}
