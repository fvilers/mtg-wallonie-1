import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counter = 0;

  increment(): void {
    this.counter++;
  }
}
