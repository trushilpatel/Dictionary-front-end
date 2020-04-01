import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "../core/services/api/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]+$")
      ]),
      password: new FormControl(null, [Validators.required])
    });
    this.initialCheck();
  }

  initialCheck() {
    this.api.authenticatedUser().subscribe(res => {
      if (res["userexist"] === true) {
        sessionStorage.setItem("userexist", "true");
        this.router.navigate(["home"]);
      } 
    });
  }

  onSubmit() {
    localStorage.setItem("username", this.loginForm.get("username").value);
    localStorage.setItem("password", this.loginForm.get("password").value);

    this.api.authenticatedUser().subscribe(res => {
      console.log(res);

      if (res["userexist"] === true) {
        sessionStorage.setItem("userexist", "true");
        this.router.navigate(["home"]);
      } else {
        alert("Please enter valid username and password...");
      }
    });
  }
}
