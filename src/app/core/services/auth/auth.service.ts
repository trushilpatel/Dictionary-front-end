import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

import { Injectable } from "@angular/core";
import { ApiService } from "../api/api.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService implements CanActivate {
  userExist: string;
  constructor(private api: ApiService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.userExist = sessionStorage.getItem("userexist");
    console.log("userexist:", this.userExist, typeof this.userExist);

    if (this.userExist === "true") {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  checkUserExist() {
    return this.api.authenticatedUser().pipe(
      map(res => {
        console.log(res);
        if (res["userexist"] === true) {
          this.userExist = "true";
        } else {
          //this.router.navigate["/login"];
          this.userExist = "false";
        }
      })
    );
  }
}
