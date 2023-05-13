import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tech'
})
export class TechPipe implements PipeTransform {

  transform(value: any[], Search: string): any {
    if (Search === '' || Search === null || Search === undefined) {
      return value;
    }
    return  value.filter(p => (p.email?.toLowerCase().includes(Search)));
  }

}
