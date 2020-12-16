import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { faUser, faCode, faCodeBranch, faFileCode, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
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
  public faCodeBranch = faCodeBranch;
  public faFileCode = faFileCode;

  public faBroadcastTower = faBroadcastTower;

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
