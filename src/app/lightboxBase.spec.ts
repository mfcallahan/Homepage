import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { LightboxBase } from './lightboxBase';
describe('LightboxBase', () => {
  let lightbox: Lightbox;
  let lightboxConfig: LightboxConfig;
  let lightboxBase: LightboxBase;

  beforeEach(() => {
    lightbox = new Lightbox(null, null, null, null, null);
    lightboxConfig = new LightboxConfig();
    lightboxBase = new LightboxBase(lightbox, lightboxConfig);
    lightboxBase.album = [];
  });

  it('should create LightboxBase and set this.lightboxConfig.centerVertically and this.lightboxConfig.disableKeyboardNav to true', () => {
    // Assert
    expect(lightboxConfig.centerVertically).toBe(true);
    expect(lightboxConfig.disableKeyboardNav).toBe(true);
  });

  it('should call this.lightbox.open()', () => {
    // Arrange
    const index = 1;

    spyOn(lightboxBase.lightbox, 'open').and.callFake(() => {
      return;
    });

    // Act
    lightboxBase.open(index);

    // Assert
    expect(lightboxBase.lightbox.open).toHaveBeenCalledWith(lightboxBase.album, index);
  });

  it('should call this.lightbox.close()', () => {
    // Arrange
    spyOn(lightboxBase.lightbox, 'close').and.callFake(() => {
      return;
    });

    // Act
    lightboxBase.close();

    // Assert
    expect(lightboxBase.lightbox.close).toHaveBeenCalled();
  });
});
