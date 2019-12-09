import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  currentYear: string;

  constructor() {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear().toString();
  }
}
