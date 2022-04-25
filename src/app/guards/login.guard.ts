import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { MessagerService } from "../services/messager.service";

@Injectable({
    providedIn: "root"
})
export class LoginGuard implements CanActivate {
    constructor(private router:Router,private messager:MessagerService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(localStorage.getItem("Token")==null){
            this.router.navigate(["login"]);
            this.messager.error("Lütfen giriş yapınız");
            return false;
        }
        return true;
    }

}