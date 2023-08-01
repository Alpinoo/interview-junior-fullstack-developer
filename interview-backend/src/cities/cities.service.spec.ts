import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitiesService],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should return filtered cities based on search term', () => {
    const searchTerm = 'we';
    const result = service.searchCities(searchTerm, 1, 5);

    const expectedCities = [
      {
        uuid: '7a994933-a111-49d6-892c-472219138b62',
        cityName: 'Braunschweig',
        count: 54,
      },
      {
        uuid: '27a7e0e0-59a4-47a1-9e11-c1713b2b4651',
        cityName: 'Schwerin',
        count: 859,
      },
      {
        uuid: '1c73a42d-9f6a-4b38-85bc-c482915db449',
        cityName: 'Villingen-Schwenningen',
        count: 65,
      },
    ];
    const expectedTotalCount = 3;

    expect(result.cities).toEqual(expectedCities);
    expect(result.totalCount).toEqual(expectedTotalCount);
  });
});
