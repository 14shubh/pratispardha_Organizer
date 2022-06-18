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
  
  // tournament:Tournament = new Tournament("","","","","","","","","","","","","","");
  organizerId = sessionStorage.getItem('UserLoginId')
  live:any[]=[];
  ended:any[]=[];
  upcoming:any[]=[];
 
 x:any = new Date().getTime() - (new Date().getHours() * 60 * 60 * 1000) - (new Date().getMinutes() * 60 * 1000) - (new Date().getSeconds() * 1000) - (new Date().getMilliseconds() - 19800000)





 
  constructor(private _tournament: TournamentService, private _router:Router) {
    if ((this.x % 10) != 0) {
      this.x += (10 - (this.x % 10))
  }
   }
 
  public read(eventId:string){
    console.log(eventId);
    this._router.navigate(['event-details/'+eventId]);
  }
    public detail(id:string){
      this._router.navigate(['event-detail/'+id]);
      

    }

  ngOnInit(): void {
    
 
    this._tournament.viewTournamentByOrganiserId(this.organizerId).subscribe(data=>{
       console.log(data);
       console.log(this.x)
              for(let item of data){
                if(item.tournamentStartDate>this.x)
                    this.upcoming.push(item);
                    else if((item.tournamentStartDate)<this.x)
                         this.ended.push(item);
                         else 
                             this.live.push(item);
              }
    },err=>{
      console.log(err);
    })
  }
 
}
 

