import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/service/tournament.service';
import {Tournament} from '../../model/tournament'

@Component({
  selector: 'app-event-upload',
  templateUrl: './event-upload.component.html',
  styleUrls: ['./event-upload.component.css']
})
export class EventUploadComponent implements OnInit {
  start:any="";end:any=""; apply:any="";
  userId=localStorage.getItem('UserLoginId');
  tournament:Tournament=new Tournament('','','','','','','','','','','',localStorage.getItem('UserLoginId'),'','');
  constructor(private eventService:TournamentService) { }
  public select(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.tournament.banner = file
    }
  }
  uploadTournament(){
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
    this.eventService.uploadTournament(fd).subscribe(data=>{
      console.log(data);
      alert("Success")
    })
    
  }
  

  ngOnInit(): void {
  }

}
