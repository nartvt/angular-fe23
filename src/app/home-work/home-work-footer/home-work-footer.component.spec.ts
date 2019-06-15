import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWorkFooterComponent } from './home-work-footer.component';

describe('HomeWorkFooterComponent', () => {
  let component: HomeWorkFooterComponent;
  let fixture: ComponentFixture<HomeWorkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWorkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWorkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
