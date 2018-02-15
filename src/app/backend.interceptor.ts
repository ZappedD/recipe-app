import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginService} from './login.service';
import {LoginComponent} from './login/login.component';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let basic_credentials = '';

    if (localStorage.getItem('loggedIn')) {
      basic_credentials = localStorage.getItem('loggedIn');
    }

    const newRequest = req.clone({
      headers: req.headers.set(
        'Authorization', basic_credentials
      )
    });

    return next.handle(newRequest);
  }
}
