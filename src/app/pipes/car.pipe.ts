import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'car'
})
export class CarPipe implements PipeTransform {

  transform(value: any[], Search: string): any {
    if (Search === '' || Search === null || Search === undefined) {
      return value;
    }
    return  value.filter(p => (p.matricule?.toLowerCase().includes(Search)));
  }

}
