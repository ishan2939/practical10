// email-link.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getInitials' })
export class GetInitialsPipe implements PipeTransform {
  transform(name: string): string {
    let names = name.split(' ');
    let fname = names[0];
    let lname = names[1];

    return (fname.charAt(0).toUpperCase()) + 
      (lname ? lname.charAt(0).toUpperCase() : fname.charAt(fname.length-1).toUpperCase());
  }
}
