import { LoaderService } from './loader.service';
import { authenticationService } from './authetnication.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : authenticationService,
    private loaderservice:LoaderService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'in28minutes'
    // let password = 'dummy'
    //let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    setTimeout(()=> {
      this.loaderservice.changeAdmin();
  }, 0);
    console.log(this.loaderservice.isLoading);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        })
    }

    return next.handle(request).pipe(
      finalize(
        () => {
          setTimeout(()=> {
            this.loaderservice.changeAdmin();
        }, 0);
          //this.loaderservice.isLoading.next(false);
          //setTimeout(() => { this.loaderservice.isLoading.next(false);}, 0)


        }
      )
    );
  }

}
