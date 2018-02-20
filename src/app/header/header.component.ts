import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  private user;
  // public loggedIn;

  constructor() {
    // this.isLoggedIn();
    this.user = localStorage.getItem('username');
  }

  ngOnInit() {
    // this.isLoggedIn();
    this.user = localStorage.getItem('username');
  }


  // public isLoggedIn() {
  //   if (localStorage.getItem('key') != null) {
  //     this.loggedIn = true;
  //   } else {
  //     this.loggedIn = false;
  //   }
  // }


  public logout() {
    localStorage.clear();
    this.user = null;
  }

}
