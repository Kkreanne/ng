import { Pipe, PipeTransform } from '@angular/core';
import { summaryForJitFileName } from '@angular/compiler/src/aot/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], column: string = 'id', asc: boolean = true): any[] {
    
    function sortFn(a: any, b: any): number {
      let x = typeof a[column] == "number" ? a[column] : a[column].toString().toLowerCase();  //take a column and create an instance with x
      let y = typeof b[column] == "number" ? b[column] : b[column].toString().toLowerCase();  //take b column and create an instance with y
      if(x === y) return 0;   //if x and y are same, return 0
      if(asc) {
        return (x < y) ? -1 : 1;  //if x is less then y return -1, if greater than return 1
      } else {
        return (x > y) ? 1 : -1;   //if x is greater then y return 1, if greater than return -1
      }
    }
    return value.sort(sortFn);
  }

}
