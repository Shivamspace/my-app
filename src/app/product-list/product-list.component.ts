import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { products } from "../products";
import { authenticationService } from "../service/authetnication.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = products;
  user: any;
  constructor(private router: ActivatedRoute,private authservice:authenticationService) {}
  ngOnInit() {
    this.user = this.router.snapshot.params["user"];
  }
  share() {
    window.alert("The product has been shared!");
  }
  message(){
    this.authservice.getmessage().subscribe((res:any)=>console.log(res.message));

  }
}
