import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticateService} from '../service/authenticate.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticate:AuthenticateService,private router:Router){}
  canActivate(): boolean{
    if(this.authenticate.checkToken()){
      return true;
    }else{
      this.router.navigate(['sign-in']);
      return false;
    }
  }



  
}
