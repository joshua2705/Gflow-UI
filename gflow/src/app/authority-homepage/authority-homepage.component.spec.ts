import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityHomepageComponent } from './authority-homepage.component';

describe('AuthorityHomepageComponent', () => {
  let component: AuthorityHomepageComponent;
  let fixture: ComponentFixture<AuthorityHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorityHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
