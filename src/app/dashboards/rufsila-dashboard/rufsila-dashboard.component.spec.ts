import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RufsilaDashboardComponent } from './rufsila-dashboard.component';

describe('RufsilaDashboardComponent', () => {
  let component: RufsilaDashboardComponent;
  let fixture: ComponentFixture<RufsilaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RufsilaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RufsilaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
