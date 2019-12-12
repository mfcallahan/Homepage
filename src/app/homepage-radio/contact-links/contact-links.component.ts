import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHome, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage-radio-contact-links',
  templateUrl: './contact-links.component.html',
  styleUrls: ['../../contact-links/contact-links.scss']
})
export class ContactLinksComponent {
  faEnvelope = faEnvelope;
  faHome = faHome;
  faBroadcastTower = faBroadcastTower;

  constructor() {}
}
