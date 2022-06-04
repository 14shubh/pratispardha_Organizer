import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrganiserService } from 'src/app/service/organiser.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email:string ="";
  status:boolean=true;
  constructor(private user :OrganiserService,private toast:ToastrService) { }

  sendMail(){
    
    console.log(this.email);
      this.user.sendMail(this.email).subscribe(data=>{
        console.log(data);
        if(data.message=="User Not Found"){
          this.toast.warning("User is not find please enter ragistered email or signup")
        }
       else if(data.message="success"){
          this.status=false;
        }

        else if(data.message="Internal Server Error"){
          this.toast.error("Oops! Something went wrong");
        }
             },err=>{
        console.log(err);
      })
  }

  ngOnInit(): void {
  }

}
