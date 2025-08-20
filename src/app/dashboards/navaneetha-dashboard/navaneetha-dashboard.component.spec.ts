import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaneethaDashboardComponent } from './navaneetha-dashboard.component';

describe('NavaneethaDashboardComponent', () => {
  let component: NavaneethaDashboardComponent;
  let fixture: ComponentFixture<NavaneethaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavaneethaDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavaneethaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
