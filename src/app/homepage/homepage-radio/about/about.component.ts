import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { LightboxBase } from 'src/app/lightboxBase';
import { Album } from 'src/app/models/album';

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
    this.album = this.getAlbum();
  }

  private getAlbum(): Album[] {
    return [
      new Album('assets/images/pro71.png', 'Pro-71'),
      new Album('assets/images/cell-coverage.png', 'Cell Coverage Map'),
    ];
  }
}
