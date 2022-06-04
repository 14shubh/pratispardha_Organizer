import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organiser } from 'src/app/model/organiser';
import { OrganiserService } from 'src/app/service/organiser.service';
import {SocialAuthService,GoogleLoginProvider} from 'angularx-social-login'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   user:Organiser=new Organiser('','','','','','');
  constructor( private userService:OrganiserService,
    private router:Router,
    private socialService:SocialAuthService,
    private Toast:ToastrService
    ) { }
  public SignIn()
  {
    this.userService.signin(this.user).subscribe(data=>{
      console.log(data)
      if(data.message=="User Not Found"){
        this.Toast.warning("User Not Found");
        this.router.navigate(['/sign-up']);
        
      }
      if(data.message=='please verify your account'){
        this.Toast.info("Please Complete Email Verification");
      }
      if(data.message=="Invalid credential"){
        this.Toast.warning("Incorrect Password");
      }
 
      if(data.status){
        console.log(data.token)
    sessionStorage.setItem('jwt_token',data.token);
        sessionStorage.setItem('UserLoginId',data.result._id);
        sessionStorage.setItem('user-profile',JSON.stringify(data.result))
        this.Toast.success("login success")
        console.log(data)
         this.router.navigate(['home']);
      } 
      if(data.status=="401"){
        this.Toast.error("Invalid Credentials");
        console.log("not found")
      }
        
    },err=>{
      if(err instanceof HttpErrorResponse){
        if(err instanceof HttpErrorResponse){
          if(err.status==500)
            alert("calleds")
            this.Toast.warning("Internal Server Error")
      }
      }
    })
  };
  forgot(){
    this.router.navigate(['forgot-password']);
  }

  public signinWithGoogle(){
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.socialService.authState.subscribe(data=>{
      this.user.email=data.email;
      this.userService.signinWithGoogle(this.user).subscribe(userData=>{
        if(userData.message=="User Not Found"){
          this.Toast.warning("User Not Found");
          this.router.navigate(['/sign-up']);
  

        }
        if(userData.message=='please verify your account'){
          this.Toast.info("Please Complete Email Verification");
        }
  

        if(userData.status){
          sessionStorage.setItem('jwt_token',userData.token);
          sessionStorage.setItem('UserLoginId',userData.result._id);
          sessionStorage.setItem('user-profile',JSON.stringify(userData.result))
          this.Toast.success("login success")
           this.router.navigate(['home']);
          }
        },err=>{
         
          if(err instanceof HttpErrorResponse){
            if(err.status==500)
              alert("calleds")
              this.Toast.warning("Internal Server Error")
        } console.log(err)
        })
    })
    
  }

  ngOnInit(): void {
  }

}
