import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhagathFormComponent } from './bhagath-form.component';

describe('BhagathFormComponent', () => {
  let component: BhagathFormComponent;
  let fixture: ComponentFixture<BhagathFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BhagathFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhagathFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
