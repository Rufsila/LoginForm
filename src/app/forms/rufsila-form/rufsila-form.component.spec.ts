import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RufsilaFormComponent } from './rufsila-form.component';

describe('RufsilaFormComponent', () => {
  let component: RufsilaFormComponent;
  let fixture: ComponentFixture<RufsilaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RufsilaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RufsilaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
