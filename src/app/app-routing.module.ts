import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { EventUploadComponent } from './component/event-upload/event-upload.component';
import { HomeComponent } from './component/home/home.component';
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
