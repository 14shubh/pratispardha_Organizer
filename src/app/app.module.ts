import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { EventUploadComponent } from './component/event-upload/event-upload.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { ProfileComponent } from './component/profile/profile.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewpasswordComponent } from './component/newpassword/newpassword.component';
import { DetailComponent } from './component/detail/detail.component';


const socialProvider={
  provide:"SocialAuthServiceConfig",
  useValue:{
    providers:[{
      id:GoogleLoginProvider.PROVIDER_ID,
      provider:new GoogleLoginProvider('862613242441-586e0opknj44rplkvhh3d6q6gfjngiij.apps.googleusercontent.com')
    }]
  }
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventUploadComponent,
    SigninComponent,
    SignupComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    ForgotComponent,
    NewpasswordComponent,
    DetailComponent,
   
  ],
  imports: [

BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule,
     ToastrModule.forRoot()



  ],
  providers: [socialProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
