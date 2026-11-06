import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { readSurveySupabase } from '../../services/survey.service'
import { OnInit } from '@angular/core';
import { Survey } from '../../interfaces/interfaces'
import { endDatePipe } from '../../pipes/endDate'


@Component({
  selector: 'app-yoursurveys',
  imports: [endDatePipe],
  templateUrl: './yoursurveys.html',
  styleUrl: './yoursurveys.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Yoursurveys implements OnInit {
  menuOpen = false;

  surveys = signal<Survey[]>([]);

  categories: string[] = [
    'All Surveys',
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation'
  ];

  async ngOnInit() {
    try {
      this.surveys.set(await readSurveySupabase());
    } catch (e) {
      console.error('Error:', e);
    }
  }

  /**
   * Small function for the category menu
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


}
