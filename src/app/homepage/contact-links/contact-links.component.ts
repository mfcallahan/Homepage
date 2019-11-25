import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGlobe, faBroadcastTower, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faWordpressSimple, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-links',
  templateUrl: './contact-links.component.html',
  styleUrls: ['./contact-links.component.scss']
})
export class ContactLinksComponent {
  faEnvelope = faEnvelope;
  faGlobe = faGlobe;
  faBroadcastTower = faBroadcastTower;
  faFile = faFile;
  faGithubSquare = faGithubSquare;
  faWordpressSimple = faWordpressSimple;
  faLinkedin = faLinkedin;

  constructor() {}
}
