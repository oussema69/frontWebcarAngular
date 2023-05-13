import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reclamation'
})
export class ReclamationPipe implements PipeTransform {

  transform(value: any[], searchText: string): any {
    if (!searchText) {
      return value;
    }
    return value.filter(rec => rec.id.toString().includes(searchText));
  }

}
