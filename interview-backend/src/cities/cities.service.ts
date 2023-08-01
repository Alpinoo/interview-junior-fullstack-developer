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

  searchCities(searchTerm: string): City[] {
    const regex = new RegExp(searchTerm, 'i');
    return this.citiesData
      .filter((city) => regex.test(city.cityName))
      .slice(0, 5);
  }
}
