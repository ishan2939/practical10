import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewNoticesComponent } from './view-notices/view-notices.component';
import { AddNoticesComponent } from './add-notices/add-notices.component';
import { UpdateNoticesComponent } from './update-notices/update-notices.component';

const routes: Routes = [
  { path: 'publisher/dashboard', component: ViewNoticesComponent },
  { path: 'publisher/addnotice', component: AddNoticesComponent },
  { path: 'publisher/updatenotice', component: UpdateNoticesComponent },
  { path: '', redirectTo: 'publisher/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule { }
