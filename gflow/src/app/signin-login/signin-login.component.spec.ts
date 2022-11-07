import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninLoginComponent } from './signin-login.component';

describe('SigninLoginComponent', () => {
  let component: SigninLoginComponent;
  let fixture: ComponentFixture<SigninLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
