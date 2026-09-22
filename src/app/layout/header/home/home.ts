import { Component } from '@angular/core';
import { Header} from '../header/header';
import { Yoursurveys } from '../../../shared/components/yoursurveys/yoursurveys';

@Component({
  selector: 'app-home',
  imports: [Header,Yoursurveys],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
