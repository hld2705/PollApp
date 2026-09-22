import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header/header";
import { Yoursurveys } from "./shared/components/yoursurveys/yoursurveys";
//import { Createnewsurvey } from './shared/components/createnewsurvey/createnewsurvey';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, 
    Yoursurveys,
    // Createnewsurvey
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PollApp');
}
