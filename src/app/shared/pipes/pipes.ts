import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numberToLetter',
})

export class numberToLetter implements PipeTransform {
  transform(value: number): string {
    return String.fromCharCode(65 + value);
  }
}