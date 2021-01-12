import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageButtonComponent } from './main-page-button.component';

describe('MainPageButtonComponent', () => {
  let component: MainPageButtonComponent;
  let fixture: ComponentFixture<MainPageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
