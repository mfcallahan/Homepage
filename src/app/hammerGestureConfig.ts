// fix for HammerGestureConfig constructor error with ngx-gallery and Angular 8:
// https://github.com/lukasz-galka/ngx-gallery/issues/242#issuecomment-517998231

import { HammerGestureConfig } from '@angular/platform-browser';
import { Injectable } from "@angular/core";

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}
