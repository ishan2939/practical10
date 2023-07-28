import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { ViewNoticesComponent } from './view-notices/view-notices.component';
import { AddNoticesComponent } from './add-notices/add-notices.component';
import { UpdateNoticesComponent } from './update-notices/update-notices.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    ViewNoticesComponent,
    AddNoticesComponent,
    UpdateNoticesComponent
  ],
  imports: [
    CommonModule,
    PublisherRoutingModule,
    SharedModule
  ]
})
export class PublisherModule { }
