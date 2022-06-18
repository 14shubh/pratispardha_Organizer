import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 data:any|null;
 name:string='';email:string='';mobile:string='';alternate:string='';
  constructor() {
    let a:any|null=sessionStorage.getItem('user-profile')
    this.data=JSON.parse(a);
    console.log(this.data)
    this.name=this.data.name;
    this.email=this.data.email;
    this.mobile=this.data.mobile;
    this.alternate=this.data.alternateNumber;

   }

  ngOnInit(): void {
  }

}
