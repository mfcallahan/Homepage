import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage-radio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class IntroComponent implements OnInit {
  currentYear: string;
  album: Array<any>;

  constructor(private lightbox: Lightbox, private lightboxConfig: LightboxConfig) {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear().toString();
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.disableKeyboardNav = true;
    this.album = environment.baseConfigs.radio.lightboxAlbum;
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
