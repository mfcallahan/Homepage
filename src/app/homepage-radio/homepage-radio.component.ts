import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage-radio',
  templateUrl: './homepage-radio.component.html',
  styleUrls: ['./homepage-radio.component.scss']
})
export class HomepageRadioComponent implements OnInit {
  clubLinks: Array<any>;
  licenseLinks: Array<any>;
  radioLinks: Array<any>;
  downloadLinks: Array<any>;
  radioMapLinks: Array<any>;
  radioBlogLinks: Array<any>;
  faWordpressSimple = faWordpressSimple;
  faMapMarker = faMapMarker;
  faBroadcastTower = faBroadcastTower;

  constructor() {}

  ngOnInit() {
    this.clubLinks = [
      {
        title: 'Arizona GMRS Repeater Club',
        url: 'https://www.azgmrs.org/welcome.php',
        imgUrl: 'assets/images/agrc.png',
        imgAlt: 'AGRC Logo'
      },
      {
        title: 'Arizona Repeater Association',
        url: 'http://w7ara.org/',
        imgUrl: 'assets/images/ara.png',
        imgAlt: 'ARA Logo'
      }
    ];

    this.licenseLinks = environment.baseConfigs.radio.licenseLinks;
    this.radioLinks = environment.baseConfigs.radio.radioLinks;
    this.downloadLinks = environment.baseConfigs.radio.downloadLinks;
    this.radioMapLinks = environment.baseConfigs.radio.mapLinks;
    this.radioBlogLinks = environment.baseConfigs.radio.blogLinks;
  }
}