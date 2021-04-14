import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { authenticationService } from "../service/authetnication.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authservice: authenticationService
  ) {}

  username: "";
  password: "";
  invalidlogin: boolean;
  errorMessage: "invalid Credentials";
  ngOnInit() {}
  handleLogin() {
    if (this.authservice.authenicate(this.username, this.password)) {
      this.invalidlogin = false;
      this.router.navigate(["welcome", this.username]);
    } else {
      this.invalidlogin = true;
    }
  }
}
