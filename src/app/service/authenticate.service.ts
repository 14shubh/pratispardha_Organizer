import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  public checkToken(){
    return !!sessionStorage.getItem('jwt_token');
  }
}
