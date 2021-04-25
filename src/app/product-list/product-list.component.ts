import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

//import { products } from "../products";
import { authenticationService } from "../service/authetnication.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products :any;
  user: any;
  messages: any;
  body: any;
  DeleteMessage: string;
  constructor(private router: ActivatedRoute,  private router1: Router,private authservice:authenticationService) {}
  ngOnInit() {
    this.user = this.router.snapshot.params["user"];
    this.authservice.getproducts().subscribe((res:any)=>{console.log(res.message)
    this.products=res});

  }
  share() {
    window.alert("The product has been shared!");
  }
  message(){
   
    this.authservice.getmessage().subscribe((res:any)=>{console.log(res.message)
    this.messages=res.message});
    this.authservice.addproducts(this.body).subscribe((res:any)=>{console.log(res.message)
      this.messages=res.message});

  }
  deleteProduct(id){
    this.authservice.Deleteproducts(id).subscribe((res:any)=>{
      console.log("Deleted"+id)
      this.DeleteMessage="Delted product with ID"+id;
      this.authservice.getproducts().subscribe((res:any)=>{console.log(res.message)
        this.products=res});
    })
  }
  updateProduct(id){
    this.router1.navigate(["product", id]);
   
      console.log("Retrieve"+id)

   
  }
  createProduct(id){
    this.router1.navigate(["product", -1]);
   
      console.log("Retrieve"+id)

   
  }
}
