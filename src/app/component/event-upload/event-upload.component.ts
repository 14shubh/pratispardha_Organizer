import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TournamentService } from 'src/app/service/tournament.service';
import {Tournament} from '../../model/tournament'
declare var Razorpay: any
@Component({
  selector: 'app-event-upload',
  templateUrl: './event-upload.component.html',
  styleUrls: ['./event-upload.component.css']
})
export class EventUploadComponent implements OnInit {
  @ViewChild("date1")startdate:ElementRef|any;
  start:any="";end:any=""; apply:any="";
  userId:any;
  user:any=sessionStorage.getItem('user-profile');
  initialDate:any;
  flag:any=false;
  tournament:Tournament=new Tournament('','','','','','','','','','','',sessionStorage.getItem('UserLoginId'),'','');
  status = false;
  constructor(private zone: NgZone,private router:Router,private eventService:TournamentService,private toaster:ToastrService) {
    console.log(sessionStorage.getItem('UserLoginId'))
    this.userId=sessionStorage.getItem('UserLoginId');
    this.user=JSON.parse(this.user);
    console.log(this.user.name)
    console.log(this.user.mobile)
    console.log(this.user.email)
  

    
  }
  notClick(){
     if(this.tournament.tournamentStartDate){
       this.flag = false;
     }
     else
       this.flag = true;
  }
   startDate(a:any):any{
    let x:any=new Date().getFullYear();let y:any=new Date().getMonth()+1;
    let z:any=new Date().getDate()+7; let b:any=new Date().getDate();
    if(y<10)
       y="0"+y;
       if(z<10)
       z="0"+z
       if(b<10)
       b="0"+b;
       if(new Date(a).getTime()<new Date(x+"-"+y+"-"+b).getTime())
       return 1;
      if(new Date(a).getTime()<new Date(x+"-"+y+"-"+z ).getTime())
    return 2;
    return 0;
   }
   canApply(a:any,b:any){
      if(new Date(a).getTime()<=new Date(b).getTime())
      return true

      return false;

   }

   canEnd(a:any,b:any,c:any):number{
    if(new Date(a).getTime()<new Date(c).getTime())
    return 1
    if(new Date(b).getTime()>new Date(c).getTime())
    return 2
    return 0
  



   }
   EndDate(a:any):any{
   
    let x:any=new Date().getFullYear();let y:any=new Date().getMonth()+1;
    let z:any=new Date().getDate()+7; let b:any=new Date().getDate();
    if(y<10)
       y="0"+y;
       if(z<10)
       z="0"+z
       if(b<10)
       b="0"+b;
      
       if(new Date(a).getTime()<new Date(x+"-"+y+"-"+b).getTime())
       return 1;
      if(new Date(a).getTime()<new Date(x+"-"+y+"-"+z ).getTime()
    )
    return 2
   }


   applyDate(a:any):any{
   
    let x:any=new Date().getFullYear();let y:any=new Date().getMonth()+1;
    let z:any=new Date().getDate()+7; let b:any=new Date().getDate();
    if(y<10)
       y="0"+y;
       if(z<10)
       z="0"+z
       if(b<10)
       b="0"+b;
      
       if(new Date(a).getTime()<new Date(x+"-"+y+"-"+b).getTime())
       return 1;
      if(new Date(a).getTime()<new Date(x+"-"+y+"-"+z ).getTime())
    return 2
    return 0
   }


  public select(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.tournament.banner = file
    }
  }
  uploadTournament(){
    this.eventService.createOrder(this.tournament.tournamentFees).subscribe(data => {
      var options = {
        "key": "rzp_test_k45BWvh7O4E1Os",
        "amount": "1000",
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": data.id,
        'handler': (response: any) => {
          console.log(this.tournament);
          this.tournament.tournamentStartDate=new Date(this.tournament.tournamentStartDate).getTime();
          this.tournament.tournamentApplyDate=new Date(this.tournament.tournamentApplyDate).getTime();
          this.tournament.tournamentEndDate=new Date(this.tournament.tournamentEndDate).getTime();
          let fd=new FormData();
          fd.append("tournamentName",this.tournament.tournamentName);
          fd.append("tournamentAddress",this.tournament.tournamentAddress);
          fd.append("tournamentTeamLimit",this.tournament.tournamentTeamLimit);
          fd.append("tournamentStartDate",this.tournament.tournamentStartDate.toString());
          fd.append("tournamentApplyDate",this.tournament.tournamentApplyDate.toString());
          fd.append("tournamentEndDate",this.tournament.tournamentEndDate.toString());
          fd.append("tournamentFees",this.tournament.tournamentFees);
          fd.append("tournamentRules",this.tournament.tournamentRules);
          fd.append("firstPrize",this.tournament.firstPrize);
          fd.append("secondPrize",this.tournament.secondPrize);
          fd.append("thirdPrize",this.tournament.thirdPrize);
      
          fd.append("organiserId",this.tournament.organiserId);
          fd.append("banner",this.tournament.banner);
          //this.toaster.info("aa rha hai");
         // alert("aa rha hai")
          this.eventService.uploadTournament(fd).subscribe(data=>{
            this.status = true;
          
            this.zone.run(() => {
              this.toaster.success("Succexdddddff")
         
          });
          })
         }

         ,

        "prefill": {
          "name": this.user.name,
          "email": this.user.email,
          "contact": this.user.email
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }

      };


      var rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) {
      });
      rzp1.open()

    })
    
  }
  

  success(status:boolean){
     this.status = status;
     this.ngOnInit();
  }



  ngOnInit(): void {
    if(this.status)
    this.toaster.success("Event Suploaded..")
  }

}
