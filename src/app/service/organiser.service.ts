import { Injectable } from '@angular/core';
import { Organiser } from '../model/organiser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganiserService {

  constructor(private http: HttpClient) { }
  public signin(organiser: Organiser): Observable<any> {
    let url = "https://spardhaa.herokuapp.com/organiser/signin";
    return this.http.post<any>(url, organiser);
  }
  public signup(organiser: Organiser): Observable<any> {
    let url = "https://spardhaa.herokuapp.com/organiser/signup";
    return this.http.post<any>(url, organiser);
  }
  public signinWithGoogle(organiser: Organiser): Observable<any> {
    let url = "https://spardhaa.herokuapp.com/organiser/signin-with-google";
    return this.http.post<any>(url, organiser);
  }
  public updateProfile(organiser: Organiser): Observable<any> {
    let url = "https://spardhaa.herokuapp.com/organiser/update-profile";
    return this.http.post<any>(url, organiser);
  }
  public viewProfile(organiser: Organiser): Observable<any> {
    let url = "https://spardhaa.herokuapp.com/organiser/view-profile/" + organiser.organiserId;
    return this.http.get<any>(url);
  }
  public saveQuery(name:string,email:string,mobile:string,query:string):Observable<any>{
    let url="https://spardhaa.herokuapp.com/contact/contact";
    return this.http.post<any>(url,{name:name,email:email,mobile:mobile,query:query});
 
  }


}
