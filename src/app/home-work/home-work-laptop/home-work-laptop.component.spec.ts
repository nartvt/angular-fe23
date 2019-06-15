import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkLaptopComponent } from './home-work-laptop.component';

describe('HomeWorkLaptopComponent', () => {
  let component: HomeWorkLaptopComponent;
  let fixture: ComponentFixture<HomeWorkLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
