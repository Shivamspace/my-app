import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { authenticationService } from '../service/authetnication.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
products:any={

      name: '',
      price: null,
      description: ''
    };
  id: any;
  constructor(private router: ActivatedRoute,  private router1: Router,private authservice:authenticationService) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];
    if (this.id!=-1) {
      this.authservice.retrieveproducts(this.id).subscribe((res:any)=>{console.log(res)
        this.products=res});
    }

  }
  saveProoduct(){
    console.log("hello")
    if (this.id!=-1) {
      this.authservice.Updateproducts(this.id,this.products).subscribe((res:any)=>{console.log(res)
        this.router1.navigate(["welcome/", "shivam"]);
        });
    } else {
      this.authservice.Createproducts(this.products).subscribe((res:any)=>{console.log(res)
        this.router1.navigate(["welcome/", "shivam"]);
        });
    }

  }
  cancel(){
    this.router1.navigate(["welcome/", "shivam"]);
  }
  }


