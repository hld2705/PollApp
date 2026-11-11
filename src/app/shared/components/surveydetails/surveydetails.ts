import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Survey } from '../../interfaces/interfaces';
import { readSurveySupabase } from '../../services/survey.service';
import { DatePipe } from '@angular/common';
import { Question } from '../../interfaces/interfaces';
import { Answer } from '../../interfaces/interfaces';

@Component({
  selector: 'app-surveydetails',
  imports: [RouterLink, DatePipe],
  templateUrl: './surveydetails.html',
  styleUrl: './surveydetails.scss',
})
export class Surveydetails {
  private route = inject(ActivatedRoute);
  surveyId: string | null = this.route.snapshot.paramMap.get('id');

  surveys = signal<Survey[]>([]);
  survey = signal<Survey | null>(null);

  async ngOnInit() {
    const allSurveys = await readSurveySupabase();
    const selectedSurvey = allSurveys.find(survey => survey.id === Number(this.surveyId));
    this.survey.set(selectedSurvey ?? null);
  }

}
