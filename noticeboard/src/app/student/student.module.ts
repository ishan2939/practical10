import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListNoticesComponent } from './list-notices/list-notices.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    ListNoticesComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
