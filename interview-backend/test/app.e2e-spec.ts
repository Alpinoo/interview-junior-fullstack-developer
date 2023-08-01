import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // test for data is greater than 1 and total data is equal to 100
  it('/cities (GET)', () => {
    return request(app.getHttpServer())
      .get('/cities')
      .expect(200)
      .expect((response) => {
        const data = response.body;
        expect(data.cities).toBeDefined();
        expect(Array.isArray(data.cities)).toBeTruthy();
        expect(data.cities.length).toBeGreaterThan(1);
        expect(data.totalCount).toBe(100);
      });
  });

  it('/cities (GET) with specific search term', () => {
    const searchTerm = 'Berlin';
    return request(app.getHttpServer())
      .get(`/cities?searchTerm=${searchTerm}`)
      .expect(200)
      .expect((response) => {
        const data = response.body;
        expect(data.cities).toBeDefined();
        expect(Array.isArray(data.cities)).toBeTruthy();
        expect(data.totalCount).toBeGreaterThan(0);
        expect(data.cities[0].cityName).toContain(searchTerm);
      });
  });
});
