import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { LightboxBase } from 'src/app/lightboxBase';

@Component({
  selector: 'app-homepage-radio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class IntroComponent extends LightboxBase implements OnInit {
  public currentYear: string;

  constructor(public lightbox: Lightbox, public lightboxConfig: LightboxConfig) {
    super(lightbox, lightboxConfig);
  }

  ngOnInit() {
    this.currentYear = new Date().getFullYear().toString();
    this.album = [
      { src: 'assets/images/pro71.png', alt: 'Pro-71' },
      { src: 'assets/images/cell-coverage.png', alt: 'Cell Coverage Map' },
    ];
  }
}
