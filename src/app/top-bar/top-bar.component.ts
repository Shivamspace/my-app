import { Component, OnInit } from "@angular/core";
import { authenticationService } from "../service/authetnication.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  isloggedin: any;
  constructor(public authservice: authenticationService) {}

  ngOnInit() {
    let flag = this.authservice.iuserloggedIn();
    console.log(this.authservice.iuserloggedIn());
    this.isloggedin = flag;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
