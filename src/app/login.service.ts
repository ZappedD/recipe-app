import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class LoginService {

  public username;

  constructor(private http: HttpClient) {
  }

  public setUsername(userName) {
    this.username = userName;
  }

  public getUsername() {
    return this.username;
  }

  public loginCredentials(credentials) {
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/login';
    let urlL: string = 'http://localhost:8080/recipe-backend/api/login';

    let toReturn = this.http.get(urlL,
      {headers: new HttpHeaders().set('Authorization', credentials)});
    return toReturn;
  }
  public registerUser(data) {
    let url: string = 'http://94.46.140.3:8080/jacob-recipe-backend/api/create/user';
    let urlL: string = 'http://localhost:8080/recipe-backend/api/create/user';
    return this.http.post(urlL, JSON.stringify(data)).subscribe(
      response => {
        console.log(response);
      });
  }

  public getResult() {
    if (localStorage.getItem('key')) {
      return true;
    }
    return false;
  }

}
