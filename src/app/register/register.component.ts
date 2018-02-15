import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  providers: [LoginService]

})
export class RegisterComponent implements OnInit {

  private result;

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    console.log();
  }
  public createUser() {
    let username : string = (<HTMLInputElement>document.getElementById('username')).value;
    let password : string = (<HTMLInputElement>document.getElementById('password')).value;
    console.log(username + ' + ' + password);

    this.loginService.registerUser({'username': username , 'password': password});
    // Skappa en ny sak efter resgistrering
  }

}
