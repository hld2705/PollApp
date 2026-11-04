import { Component } from '@angular/core';
import { readSurveySupabase } from '../../services/survey.service'
import { OnInit } from '@angular/core';
import { Survey } from '../../interfaces/interfaces'
import { endDatePipe } from '../../pipes/pipes'

@Component({
  selector: 'app-yoursurveys',
  imports: [endDatePipe],
  templateUrl: './yoursurveys.html',
  styleUrl: './yoursurveys.scss',
})
export class Yoursurveys implements OnInit {

  survey: Survey[] = [];

  async ngOnInit() {
    this.survey = await readSurveySupabase();
  };


}
