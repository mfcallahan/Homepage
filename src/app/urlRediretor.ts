import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlRedirector implements CanActivate {
  constructor() {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    window.location.href = route.data.externalUrl;
    return true;
  }
}
