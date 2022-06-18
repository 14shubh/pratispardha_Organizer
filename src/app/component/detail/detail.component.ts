import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from 'src/app/service/tournament.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id:string=''
  teams:any[]=[];
  event:any;
   constructor(private activateRouter:ActivatedRoute,private Event:TournamentService) { }
 
   ngOnInit(): void {
 this.id=    this.activateRouter.snapshot.params['id'];
     console.log(    this.activateRouter.snapshot.params['id'])
      this.Event.viewTournamentByTournamentId(this.id).subscribe(data=>{
       this.event=data;
       console.log(this.event)
       //console.log(data.tournamentTeams);
        for(let item of data.tournamentTeams){
          if(item.ownerId)
            this.teams.push(item)
        }
        console.log(this.teams)
      })
   }
 
}
