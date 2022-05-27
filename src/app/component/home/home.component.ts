import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tournament } from 'src/app/model/tournament';
import { TournamentService } from 'src/app/service/tournament.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  event:any;
  // tournament:Tournament = new Tournament("","","","","","","","","","","","","","");
  organizerId = localStorage.getItem('UserLoginId')
 
 
  constructor(private _tournament: TournamentService, private _router:Router) { }
 
  public read(eventId:string){
    console.log(eventId);
    this._router.navigate(['event-details/'+eventId]);
  }
 
  ngOnInit(): void {
    this._tournament.viewTournamentByOrganiserId(this.organizerId).subscribe(data=>{
      // console.log(data);
      this.event = data;
    },err=>{
      console.log(err);
    })
  }
 
}
 

