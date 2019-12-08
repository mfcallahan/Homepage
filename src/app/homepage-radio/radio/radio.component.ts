import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  clubLinks: Array<any>;
  licenseLinks: Array<any>;
  radioLinks: Array<any>;
  downloadLinks: Array<any>;

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
  }
}
