import { DefaultUrlSerializer, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    return super.parse(url.toLowerCase());
  }
}
