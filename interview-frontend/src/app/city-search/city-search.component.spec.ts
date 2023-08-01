import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CitySearchComponent } from './city-search.component';

describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitySearchComponent],
      imports:[HttpClientModule,FormsModule]
    });
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have initial values set', () => {
    expect(component.searchTerm).toEqual('');
    expect(component.cities).toEqual([]);
    expect(component.currentPage).toEqual(1);
    expect(component.pageSize).toEqual(5);
    expect(component.totalCities).toEqual(0);
  });
  it('should navigate to previous and next pages correctly', () => {
    component.searchTerm = 'w'
    component.totalCities = 15;
    component.currentPage = 2;

    component.previousPage();
    expect(component.currentPage).toEqual(1);

    component.nextPage();
    expect(component.currentPage).toEqual(2);

    component.nextPage();
    expect(component.currentPage).toEqual(3);


  });
  
});
