import { Injectable } from '@nestjs/common';
import { City } from './dto/city.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CitiesService {
  private readonly citiesData: City[];

  constructor() {
    const citiesJsonPath = path.join(__dirname, '../../../cities.json');
    this.citiesData = JSON.parse(fs.readFileSync(citiesJsonPath, 'utf-8'));
  }

  searchCities(
    searchTerm: string,
    page: number,
    pageSize: number,
  ): { cities: City[]; totalCount: number } {
    const regex = new RegExp(searchTerm, 'i');
    const filteredCities = this.citiesData.filter(
      (city) => regex.test(city.cityName), //match searchTerm with cities
    );

    const startIndex = (page - 1) * pageSize;
    const endIndex = +startIndex + +pageSize; //pageSize came as string, converted to number
    const paginatedCities = filteredCities.slice(startIndex, endIndex); //limit results

    return { cities: paginatedCities, totalCount: filteredCities.length };
  }
}
