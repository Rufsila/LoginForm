import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagathDashboardComponent } from './bhagath-dashboard.component';

describe('BhagathDashboardComponent', () => {
  let component: BhagathDashboardComponent;
  let fixture: ComponentFixture<BhagathDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhagathDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhagathDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
