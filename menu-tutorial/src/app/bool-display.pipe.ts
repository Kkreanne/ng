import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean): string {   //take in a boolean and return a string
    return value ? "Yes" : "No";        //if value is true, display yes if false display no
  }

}
