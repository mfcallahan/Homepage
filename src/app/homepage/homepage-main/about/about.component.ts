import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { faUser, faCode, faCodeBranch, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { LightboxBase } from 'src/app/lightboxBase';

@Component({
  selector: 'app-homepage-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent extends LightboxBase implements OnInit {
  public faUser = faUser;
  public faCode = faCode;
  public faCodeBranch = faCodeBranch;
  public faBroadcastTower = faBroadcastTower;

  constructor(public lightbox: Lightbox, public lightboxConfig: LightboxConfig) {
    super(lightbox, lightboxConfig);
  }

  ngOnInit() {
    this.album = [
      { src: 'assets/images/qbasic.png', alt: 'QBASIC' },
      { src: 'assets/images/ti83.png', alt: 'TI-83' },
    ];
  }
}
