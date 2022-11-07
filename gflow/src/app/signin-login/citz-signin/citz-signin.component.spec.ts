import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitzSigninComponent } from './citz-signin.component';

describe('CitzSigninComponent', () => {
  let component: CitzSigninComponent;
  let fixture: ComponentFixture<CitzSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitzSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitzSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
