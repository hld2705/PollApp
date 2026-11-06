import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endDatePipe',
  standalone: true
})


export class endDatePipe implements PipeTransform {
  transform(value: string) {
    return Math.ceil((new Date(value).getTime() - new Date().getTime()) / 86400000);
  }
}