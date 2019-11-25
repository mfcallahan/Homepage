import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faUser = faUser;
  faCode = faCode;
  faBroadcastTower = faBroadcastTower;
  albumAboutMe: Array<any>;

  constructor(private lightbox: Lightbox, private lightboxConfig: LightboxConfig) {}

  ngOnInit() {
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.disableKeyboardNav = true;

    const images = [{ src: 'assets/images/qbasic.png' }, { src: 'assets/images/ti83.png' }];
    this.albumAboutMe = images;
  }

  open(index: number): void {
    this.lightbox.open(this.albumAboutMe, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
