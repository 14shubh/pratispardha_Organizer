import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Tournament} from '../model/tournament'
 
@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  // url:string = "https://spardhaa.herokuapp.com/"
  url:string = "https://spardhaa.herokuapp.com/"
  constructor(private http:HttpClient) { }
  public uploadTournament(fd:any): Observable<any> {
    let url = this.url+"tournament/tournament/upload-tournament";
    return this.http.post<any>(url, fd);
  }
  public viewTournamentByTournamentId(tournamentId:any): Observable<any> {
    let url = this.url+"tournament/view-tournament/"+tournamentId;
    return this.http.get<any>(url);
  }
  public viewTournamentByOrganiserId(organiserId: any): Observable<any> {
    let url = this.url+"tournament/view-tournament-by-organiserId/"+organiserId;
    return this.http.get<any>(url);
  }
}
 

