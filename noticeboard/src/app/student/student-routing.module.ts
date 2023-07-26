import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNoticesComponent } from './list-notices/list-notices.component';

const routes: Routes = [
  { path: 'student/dashboard', component: ListNoticesComponent },
  { path: '', redirectTo: 'student/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
