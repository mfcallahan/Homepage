import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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

    this.licenseLinks = environment.baseConfigs.licenseLinks;
    this.radioLinks = environment.baseConfigs.radioLinks;
    this.downloadLinks = environment.baseConfigs.downloadLinks;
    this.radioMapLinks = environment.baseConfigs.radioMapLinks;
    this.radioBlogLinks = environment.baseConfigs.radioBlogLinks;
  }
}
