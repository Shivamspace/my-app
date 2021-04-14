import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { authenticationService } from "../service/authetnication.service";

@Injectable({
  providedIn: "root"
})
export class AuthGaurdService implements CanActivate {
  constructor(
    private router: Router,
    private authService: authenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.iuserloggedIn()) return true;

    this.router.navigate(["login"]);
    return false;
  }
}
