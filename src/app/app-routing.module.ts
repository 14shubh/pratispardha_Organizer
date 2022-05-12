import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventUploadComponent } from './component/event-upload/event-upload.component';

const routes: Routes = [
  {
    path:'event-upload',
    component: EventUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
