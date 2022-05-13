import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  public checkToken(){
    return !!localStorage.getItem('jwt_token');
  }
}
