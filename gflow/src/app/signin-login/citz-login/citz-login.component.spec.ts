import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitzLoginComponent } from './citz-login.component';

describe('CitzLoginComponent', () => {
  let component: CitzLoginComponent;
  let fixture: ComponentFixture<CitzLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitzLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitzLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
