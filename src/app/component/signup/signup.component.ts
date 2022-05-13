import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organiser } from 'src/app/model/organiser';
import { OrganiserService } from 'src/app/service/organiser.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:Organiser=new Organiser(" "," ", " "," "," "," ");

  constructor( private userService:OrganiserService,private router:Router) { }
  public SignUp(){
    this.userService.signup(this.user).subscribe(data=>{
      console.log(data);
      alert('Success');
      this.router.navigate(['sign-in']);
    });
    

  }

  ngOnInit(): void {
  }

}
