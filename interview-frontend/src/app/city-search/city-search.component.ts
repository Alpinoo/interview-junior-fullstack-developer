import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent {
  searchTerm: string = '';
  cities: any[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalCities: number = 0; //Keep track of total cities to disable next navigation
  searchPerformed: boolean = false; // if search has been performed
  searchWarning: string = ''; // Warning message for empty search term




  constructor(private http: HttpClient) {}

  searchCities() {
    if (!this.searchTerm.trim()) {
      this.searchWarning = 'Please enter a city name to search.';
      this.cities = [];
      this.totalCities = 0;
      this.searchPerformed = false;
      return;
    }

    this.currentPage = 1;
    this.searchWarning = '';
    this.fetchCities();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchCities();
    }
  }

  nextPage() {
    this.currentPage++;
    this.fetchCities();
  }

  private fetchCities() {
  this.http
    .get<{ cities: any[], totalCount: number }>(
      `http://localhost:3000/cities?searchTerm=${this.searchTerm}&page=${this.currentPage}&pageSize=${this.pageSize}`
    )
    .subscribe((response) => {
      this.cities = response.cities;
      this.totalCities = response.totalCount;
      this.searchPerformed = true;
    });
}
}
