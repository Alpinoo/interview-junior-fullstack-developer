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
  
});
