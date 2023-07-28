// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetInitialsPipe } from './initials.pipe';
import { TimeAgoPipe } from './timeago.pipe';


@NgModule({
  declarations: [
    GetInitialsPipe,
    TimeAgoPipe
  ],
  imports: [CommonModule],
  exports: [
    GetInitialsPipe,
    TimeAgoPipe
  ],
})
export class SharedModule {}
