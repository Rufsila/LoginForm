import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaneethaFormComponent } from './navaneetha-form.component';

describe('NavaneethaFormComponent', () => {
  let component: NavaneethaFormComponent;
  let fixture: ComponentFixture<NavaneethaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavaneethaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavaneethaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
