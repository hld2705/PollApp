import { Routes } from '@angular/router';
import { Createnewsurvey } from './shared/components/createnewsurvey/createnewsurvey';
import { Home } from './layout/header/home/home';
import { Surveydetails } from './shared/components/surveydetails/surveydetails';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'new-survey', component: Createnewsurvey },
  { path: 'survey-details', component: Surveydetails },
];
