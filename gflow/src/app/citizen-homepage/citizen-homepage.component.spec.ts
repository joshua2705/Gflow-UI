import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenHomepageComponent } from './citizen-homepage.component';

describe('CitizenHomepageComponent', () => {
  let component: CitizenHomepageComponent;
  let fixture: ComponentFixture<CitizenHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
