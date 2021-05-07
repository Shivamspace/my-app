import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from "@angular/router";
import { API_URL } from "../constants";
import {map} from 'rxjs/operators';
export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'
@Injectable({
  providedIn: "root"
})


export class authenticationService {

  constructor(private httpclient: HttpClient,@Inject(DOCUMENT) document) {}
  // authenicate(username, password) {
  //   if (username === "shivam" && password === "shivam") {
  //     console.log("true");
  //     sessionStorage.setItem("Auth", username);
  //     return true;
  //   }
  //   return false;
  // }
  // iuserloggedIn() {
  //   let user = sessionStorage.getItem("Auth");
  //   console.log(user);
  //   if (user == null) {
  //     console.log("trur");
  //     return false;
  //   }
  //   return true;
  // }


  getmessage() {
    let headers = this.executeAuthenticationService("Shivam","Shivam");
    return this.httpclient.get(
      `${API_URL}/message`,

      //{headers}
    );
  }
  getproducts() {
    return this.httpclient.get(
      `${API_URL}/products`
    );
  }
 addproducts(body) {
    return this.httpclient.post(
      `${API_URL}/products`,body
    );
  }
  Deleteproducts(id) {
    return this.httpclient.delete(
      `${API_URL}/DeleteProduct/${id}`
    );
  }
 Updateproducts(id,product) {
    return this.httpclient.put(
      `${API_URL}/updateProduct/${id}`,product
    );
  }
  Createproducts(product) {
    return this.httpclient.post(
      `${API_URL}/createProduct`,product
    );
  }
  retrieveproducts(id) {
    return this.httpclient.get(
      `${API_URL}/products/${id}`
    );
  }


  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

    return this.httpclient.get(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }
  executeJWTAuthenticationService(username, password) {

    return this.httpclient.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  iuserloggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }


  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

