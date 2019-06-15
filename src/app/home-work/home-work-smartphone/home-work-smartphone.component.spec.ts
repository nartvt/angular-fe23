import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkSmartphoneComponent } from './home-work-smartphone.component';

describe('HomeWorkSmartphoneComponent', () => {
  let component: HomeWorkSmartphoneComponent;
  let fixture: ComponentFixture<HomeWorkSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
