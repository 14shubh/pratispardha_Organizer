import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Tournament} from '../model/tournament'

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  
  constructor(private http:HttpClient) { }
  public uploadTournament(fd:any): Observable<any> {
    let url = "https://spardhaa.herokuapp.com/tournament/upload-tournament";
    return this.http.post<any>(url, fd);
  }
  public viewTournamentByTournamentId(tournament:Tournament): Observable<any> {
    let url = "https://spardhaa.herokuapp.com/tournamentview-tournament/"+tournament.tournamentId;
    return this.http.get<any>(url);
  }
  public viewTournamentByOrganiserId(tournament:Tournament): Observable<any> {
    let url = "https://spardhaa.herokuapp.comview-tournament-by-organiserId/"+tournament.organiserId;
    return this.http.get<any>(url);
  }
}
