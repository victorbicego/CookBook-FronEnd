import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    let stringArray: string[] = value.toLowerCase().split("");
    stringArray[0] = stringArray[0].toUpperCase();
    return stringArray.join("");
  }

}
