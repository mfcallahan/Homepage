import { ActivatedRouteSnapshot } from '@angular/router';
import { UrlRedirector } from './urlRedirector';

describe('UrlRedirector', () => {
  xit('should set window.location.href to external url and return true', () => {
    // Arrange
    // TODO: mock window object
    const activatedRouteSnapshot = new ActivatedRouteSnapshot();
    activatedRouteSnapshot.data = { route: 'foo/bar' };

    const urlRedirector = new UrlRedirector();

    // Act
    // const result = urlRedirector.canActivate(activatedRouteSnapshot);

    // Assert
    // expect(window.location.href).toBe(activatedRouteSnapshot.data.route);
    // expect(result).toBe(true);
  });
});
