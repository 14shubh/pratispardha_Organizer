import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Organiser } from 'src/app/model/organiser';
import { OrganiserService } from 'src/app/service/organiser.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:Organiser=new Organiser("","", "","","","");

  constructor( private userService:OrganiserService,private router:Router,private toast:ToastrService) { }
  public SignUp(){
    this.userService.signup(this.user).subscribe(data=>{
      if(data.message=='user already found'){
        this.toast.warning("User Already Exist ");
         this.router.navigate(['sign-in']);

      }
    
  if(data.message=="sucesss"){
    this.toast.info("Check your Email for verification");

    this.router.navigate(['sign-in']);}
  },(err)=>{
    console.log(err);
  })
}
    

  

  ngOnInit(): void {
  }

}
