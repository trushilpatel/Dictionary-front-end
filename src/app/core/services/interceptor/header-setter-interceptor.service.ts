import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHeaders,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HeaderSetterInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    if (username !== null && password !== null) {
      const modifyRequest = req.clone({
        headers: new HttpHeaders({
          username: username,
          password: password
        })
      });
      console.log(modifyRequest);
      return next.handle(modifyRequest);  
    }

    return next.handle(req);
  }
}
