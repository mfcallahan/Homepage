// fix for HammerGestureConfig constructor error with Angular 8:
// https://github.com/lukasz-galka/ngx-gallery/issues/242#issuecomment-517998231

import { HammerGestureConfig } from '@angular/platform-browser';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}
