import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-radio-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {
  currentYear: string;

  constructor() {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear().toString();
  }
}
