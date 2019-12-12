import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-radio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class IntroComponent implements OnInit {
  currentYear: string;

  constructor() {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear().toString();
  }
}
