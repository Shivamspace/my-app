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
    this.authservice.executeAuthenticationService(this.username, this.password).subscribe(



      data=>{

        console.log(data);
        this.invalidlogin = false;
        this.router.navigate(["welcome", this.username]);
      },
      error=>{

        console.log(error);
        this.invalidlogin = true;
      }
    )







  }
}
