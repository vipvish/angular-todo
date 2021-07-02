import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFormate'
})
export class TitleFormatePipe implements PipeTransform {

  transform(value: string, id : number): string {
    return id + ") " +value+" | custom Pipe";
  }

}
