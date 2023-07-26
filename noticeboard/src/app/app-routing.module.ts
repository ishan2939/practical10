import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { PublisherModule } from './publisher/publisher.module';
import { StudentModule } from './student/student.module';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' }
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    AuthModule,
    PublisherModule,
    StudentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
