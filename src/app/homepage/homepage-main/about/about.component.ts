import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import {
  faUser,
  faCode,
  faFileCode,
  faCodeBranch,
  faBroadcastTower,
  faLink,
  faHome,
  faTh,
} from '@fortawesome/free-solid-svg-icons';
import { LightboxBase } from 'src/app/lightboxBase';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-homepage-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent extends LightboxBase implements OnInit {
  public projects: any;
  public faUser = faUser;
  public faCode = faCode;
  public faFileCode = faFileCode;
  public faCodeBranch = faCodeBranch;
  public faBroadcastTower = faBroadcastTower;
  public faLink = faLink;
  public faHome = faHome;
  public faTh = faTh;

  constructor(public lightbox: Lightbox, public lightboxConfig: LightboxConfig) {
    super(lightbox, lightboxConfig);
  }

  ngOnInit() {
    this.album = this.getAlbum();
  }

  private getAlbum(): Album[] {
    return [new Album('assets/images/qbasic.png', 'QBASIC'), new Album('assets/images/ti83.png', 'TI-83')];
  }
}
