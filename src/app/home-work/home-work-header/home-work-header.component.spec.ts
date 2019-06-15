import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkHeaderComponent } from './home-work-header.component';

describe('HomeWorkHeaderComponent', () => {
  let component: HomeWorkHeaderComponent;
  let fixture: ComponentFixture<HomeWorkHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
