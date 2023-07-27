import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListNoticesComponent } from './list-notices/list-notices.component';
import { GetInitialsPipe } from '../initials.pipe';
import { TimeAgoPipe } from '../timeago.pipe';


@NgModule({
  declarations: [
    ListNoticesComponent,
    GetInitialsPipe,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
