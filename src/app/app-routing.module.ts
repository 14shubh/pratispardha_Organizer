import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { DetailComponent } from './component/detail/detail.component';

import { EventUploadComponent } from './component/event-upload/event-upload.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { HomeComponent } from './component/home/home.component';
import { NewpasswordComponent } from './component/newpassword/newpassword.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import {AuthGuard} from './guard/auth.guard'

const routes: Routes = [
  {
    path:'',
    component:SigninComponent
  },
  {
    path:'event-upload',
    component: EventUploadComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'sign-in',
    component:SigninComponent

  },
  {path:'sign-up',
component:SignupComponent
},
{
  path:'home',
  component:HomeComponent,
  canActivate:[AuthGuard]
},
{
  path:'about-us',
  component:AboutComponent
},

{
  path:'contact',
  component:ContactComponent,
},
{
  path:'forgot-password',
  component:ForgotComponent
},{
  path:'new-password/:id',
  component:NewpasswordComponent
},
{
  path:'event-detail/:id',
  component:DetailComponent,
  canActivate:[AuthGuard]
},
{
  path:'view-profile',
  component:ProfileComponent,
  canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
