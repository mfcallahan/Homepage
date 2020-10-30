import { Lightbox, LightboxConfig } from 'ngx-lightbox';

export class LightboxBase {
  public album: Array<any>;

  constructor(public lightbox: Lightbox, public lightboxConfig: LightboxConfig) {
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.disableKeyboardNav = true;
  }

  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
