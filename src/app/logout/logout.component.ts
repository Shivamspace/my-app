import { Component, OnInit } from "@angular/core";
import { authenticationService } from "../service/authetnication.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor(public authservice: authenticationService) {}

  ngOnInit() {
    this.authservice.logout();
  }
}
