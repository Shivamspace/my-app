import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class authenticationService {
  constructor(private httpclient: HttpClient) {}
  authenicate(username, password) {
    if (username === "shivam" && password === "shivam") {
      console.log("true");
      sessionStorage.setItem("Auth", username);
      return true;
    }
    return false;
  }
  iuserloggedIn() {
    let user = sessionStorage.getItem("Auth");
    console.log(user);
    if (user == null) {
      console.log("trur");
      return false;
    }
    return true;
  }
  logout() {
    sessionStorage.removeItem("Auth");
  }

  getmessage() {
    return this.httpclient.get(
      "https://run.mocky.io/v3/d4816270-5a26-4d5a-bd52-3646f79370c4"
    );
  }
}
