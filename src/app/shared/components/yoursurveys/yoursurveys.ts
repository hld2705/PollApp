import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { readSurveySupabase } from '../../services/survey.service'
import { OnInit } from '@angular/core';
import { Survey } from '../../interfaces/interfaces'
import { endDatePipe } from '../../pipes/endDate'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-yoursurveys',
  imports: [endDatePipe,RouterLink],
  templateUrl: './yoursurveys.html',
  styleUrl: './yoursurveys.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Yoursurveys implements OnInit {
  menuOpen = false;

  surveys = signal<Survey[]>([]);

  selectedCategory = '';

  selectedStatus = 'all';


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

/**
 * 
 * @param category 
 * @returns seletedCategory as a param that gets used later on for filtering functions
 */
  selectCategory(category: string) {
    this.selectedCategory = category;
    if (this.selectedCategory == 'All Surveys') {
      return this.selectedCategory = '';
    } else { return this.selectedCategory; }

  }

  /**
   * 
   * @param status saves the selected status from the user 
   */
  selectStatus(status: string){
    this.selectedStatus = status;
  }

  /**
   * Calculates the value depending on how much there is left for the survey to end, also compares it to the needed category, 
   * which in return can filter depending on the user preferences
   */
  filteredSurveys() {
    return this.surveys().filter(survey => {
        const dayValue = (new Date(survey.end_date).getTime() - new Date().getTime()) / 86400000;
        const categoryMatch = this.selectedCategory === '' || survey.category_name === this.selectedCategory;

        if (this.selectedStatus === 'active') {
            return dayValue > 0 && categoryMatch;
        } else if (this.selectedStatus === 'past') {
            return dayValue <= 0 && categoryMatch;
        } else {
            return categoryMatch;
        }
    });
}

}
