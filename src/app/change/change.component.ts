import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  imports: [],
  templateUrl: './change.component.html',
  styleUrl: './change.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeComponent implements OnInit {
  title = 'Change Component';
  number = 0;

  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    // Initialization logic can go here
    console.log('ChangeComponent initialized');
    setTimeout(() => {
      console.log('ChangeComponent timeout executed');
      this.number = 10;
      this.cdr.detectChanges();
    }, 5000);
  }
}
