import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { faUser, faCode, faCodeBranch, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faUser = faUser;
  faCode = faCode;
  faCodeBranch = faCodeBranch;
  faBroadcastTower = faBroadcastTower;
  album: Array<any>;

  constructor(private lightbox: Lightbox, private lightboxConfig: LightboxConfig) {}

  ngOnInit() {
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.disableKeyboardNav = true;
    this.album = environment.baseConfigs.home.lightboxAlbum;
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
