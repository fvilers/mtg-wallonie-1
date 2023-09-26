import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent implements OnInit, OnDestroy {
  counter = 0;

  private previousTitle: string | undefined = undefined;

  constructor(private readonly title: Title) {}

  ngOnInit(): void {
    this.previousTitle = this.title.getTitle();
    this.title.setTitle('Counter | Angular app');
  }

  ngOnDestroy(): void {
    if (this.previousTitle !== undefined) {
      this.title.setTitle(this.previousTitle);
    }
  }

  get doubled(): number {
    return this.counter * 2;
  }

  increment(): void {
    this.counter++;
  }
}
