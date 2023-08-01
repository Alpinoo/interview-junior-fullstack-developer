import { Controller, Get, Query } from '@nestjs/common';
import { City } from './dto/city.dto';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getCities(
    @Query('searchTerm') searchTerm: string,
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 5,
  ): { cities: City[]; totalCount: number } {
    return this.citiesService.searchCities(searchTerm, page, pageSize);
  }
}
