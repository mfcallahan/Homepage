import { Component } from '@angular/core';
import { faEnvelope, faBroadcastTower, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faWordpressSimple, faLinkedin, faRedditSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-homepage-contact-links',
  templateUrl: './contact-links.component.html',
  styleUrls: ['../../contact-links/contact-links.component.scss'],
})
export class ContactLinksComponent {
  faEnvelope = faEnvelope;
  faBroadcastTower = faBroadcastTower;
  faFile = faFile;
  faGithubSquare = faGithubSquare;
  faWordpressSimple = faWordpressSimple;
  faLinkedin = faLinkedin;
  faRedditSquare = faRedditSquare;

  constructor() {}
}
