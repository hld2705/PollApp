import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToLetter'
})

export class numberToLetter implements PipeTransform {
  transform(value: number): string {
    return String.fromCharCode(65 + value);
  }
}

@Pipe({
  name: 'endDatePipe',
  standalone: true
})

export class endDatePipe implements PipeTransform {
  transform(value: string) {
    return Math.ceil((new Date(value).getTime() - new Date().getTime()) / 86400000);
  }
}