import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthGaurdService } from "./service/authgaurd.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
      {
        path: "welcome/:user",
        component: ProductListComponent,
        canActivate: [AuthGaurdService]
      },
      {
        path: "logout",
        component: LogoutComponent,
        canActivate: [AuthGaurdService]
      },
      { path: "*", component: LoginComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    LoginComponent,
    FooterComponent,
    LogoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
