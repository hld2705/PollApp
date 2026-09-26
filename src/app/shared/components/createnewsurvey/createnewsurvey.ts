import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Questions } from './questions/questions';

@Component({
  selector: 'app-createnewsurvey',
  imports: [RouterLink, Questions],
  templateUrl: './createnewsurvey.html',
  styleUrl: './createnewsurvey.scss',
})
export class Createnewsurvey {
  
}
