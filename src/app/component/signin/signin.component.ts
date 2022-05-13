import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organiser } from 'src/app/model/organiser';
import { OrganiserService } from 'src/app/service/organiser.service';
import {SocialAuthService,GoogleLoginProvider} from 'angularx-social-login'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   user:Organiser=new Organiser('','','','','','');
  constructor( private userService:OrganiserService,
    private router:Router,
    private socialService:SocialAuthService
    ) { }
  public SignIn()
  {
    this.userService.signin(this.user).subscribe(data=>{
      console.log(data);
      alert("Sign In Success");
      if(data.status){
        localStorage.setItem('jwt_token',data.token);
        localStorage.setItem('UserLoginId',data.result._id);
        localStorage.setItem('user-profile',JSON.stringify(data.result))
       
         this.router.navigate(['home']);
      }else{
        console.log("not found")
      }
    },err=>{
      if(err instanceof HttpErrorResponse){
          if(err.status==500)
            window.alert("Internal Server Error");
      }
      
    })

  };

  public signinWithGoogle(){
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.socialService.authState.subscribe(data=>{
      this.userService.signinWithGoogle(this.user).subscribe(userData=>{
        if(userData.status){
          localStorage.setItem('jwt_token',userData.token);
          localStorage.setItem('UserLoginId',userData.result._id);
           this.router.navigate(['home']);
        }else{
          alert("not found");
        }
        },err=>{
          alert("Email not found please Sign up");
          this.router.navigate(["sign-up"]);
        })
    })
    
  }

  ngOnInit(): void {
  }

}
