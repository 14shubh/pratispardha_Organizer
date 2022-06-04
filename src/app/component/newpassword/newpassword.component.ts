import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganiserService } from 'src/app/service/organiser.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  UserId:string="";
  password1:string='';
  password2:string='';
  constructor(private user:OrganiserService,private _activeRouter:ActivatedRoute) { 
    this.UserId = this._activeRouter.snapshot.params['id'];
  }
  updatePassword(){
    if(this.password1==this.password2){
      this.user.newPassword(this.UserId,this.password1).subscribe(data=>{
        alert("success");

      },
      err=>{
        alert("error");
        console.log(err);
      })


    }
    else
    alert("Password Mismatch")
  }

  ngOnInit(): void {
  }


}
