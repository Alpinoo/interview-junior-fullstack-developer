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

  constructor(private http: HttpClient) { }

  searchCities() {
    this.http.get<any[]>(`http://localhost:3000/cities?searchTerm=${this.searchTerm}`)
      .subscribe((cities) => {
        this.cities = cities;
      });
  }
}
