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

  constructor(public loginService: LoginService) {}

  ngOnInit() {
    this.user = localStorage.getItem('username');
  }
  public loginUser(data) {

    let username : string = (<HTMLInputElement>document.getElementById('username')).value;
    let password : string = (<HTMLInputElement>document.getElementById('password')).value;
    console.log(data);
    console.log(username, password);

    this.credentials = 'Basci ' + btoa(username + ':' + password);
    localStorage.setItem('loggedIn', this.credentials);

     this.loginService.loginCredentials(this.credentials).subscribe(result => {
      localStorage.setItem('username', username);
    }, error => {
      localStorage.clear();
    });
    this.user = localStorage.getItem('username');
  }

}
