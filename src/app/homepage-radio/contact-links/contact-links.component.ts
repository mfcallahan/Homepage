import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHome, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage-radio-contact-links',
  templateUrl: './contact-links.component.html',
  styleUrls: ['../../contact-links/contact-links.scss']
})
export class ContactLinksComponent implements OnInit {
  faEnvelope = faEnvelope;
  faHome = faHome;
  faBroadcastTower = faBroadcastTower;
  homeUrl: string;

  constructor() {}

  ngOnInit(): void {
    this.homeUrl = location.origin;
  }
}
