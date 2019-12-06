import { Component, OnInit } from '@angular/core';

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
        imgUrl: '/assets/images/agrc.png',
        imgAlt: 'AGRC Logo'
      },
      {
        title: 'Arizona Repeater Association',
        url: 'http://w7ara.org/',
        imgUrl: '/assets/images/ara.png',
        imgAlt: 'ARA Logo'
      }
    ];

    this.licenseLinks = [
      { title: 'How to get a GMRS license', url: 'https://www.azgmrs.org/how-to-get-a-gmrs-license.php' },
      { title: 'hamstudy.org - My favorite ham radio exam preparation resource', url: 'https://hamstudy.org/' },
      {
        title: 'ARRL - Find an amateur radio exam session',
        url: 'http://www.arrl.org/find-an-amateur-radio-license-exam-session'
      },
      { title: 'FCC Universal Licensing System', url: 'https://wireless2.fcc.gov/UlsEntry/licManager/login.jsp' }
    ];

    this.radioLinks = [
      { title: 'Arizona Repeaters Directory', url: 'http://www.azrepeaters.net/' },
      { title: 'Arizona Repeater Association', url: 'https://www.w7ara.org/' },
      { title: 'RadioReference.com - AZ Database', url: 'https://www.radioreference.com/apps/db/?stid=4' },
      {
        title: 'RadioReference.com - AZ Discussion Forum',
        url: 'https://forums.radioreference.com/forums/arizona-radio-discussion-forum.36/'
      },
      { title: 'US Amateur Radio Frequency Allocations', url: 'http://www.arrl.org/frequency-allocations' },
      { title: 'US Nationwide Amateur Frequencies', url: 'https://www.radioreference.com/apps/db/?aid=7771' },
      {
        title: 'FRS/GMRS combined channel chart',
        url: 'https://wiki.radioreference.com/index.php/FRS/GMRS_combined_channel_chart'
      },
      { title: 'FCC License/Call Sign Search', url: 'https://wireless2.fcc.gov/UlsApp/UlsSearch/searchAdvanced.jsp' },
      {
        title: 'The Antenna Farm: Antenna Tutorial',
        url: 'https://www.theantennafarm.com/catalog/index.php?main_page=antenna_tutorial_page'
      },
      { title: 'KD4SAI VHF/UHF Line of Sight Calculator', url: 'https://www.qsl.net/kd4sai/distance.html' },
      {
        title: 'CHIRP - open source radio programming software',
        url: 'https://chirp.danplanet.com/projects/chirp/wiki/Home'
      },
      { title: 'miklor.com - Radio Information & Support Site', url: 'http://www.miklor.com/' },
      { title: 'ScannerMaster.com - The scanner experts!', url: 'https://www.scannermaster.com/' }
    ];

    this.downloadLinks = [
      {
        title: 'WRAA720-band-plan.csv',
        url: '/assets/docs/WRAA720-band-plan.csv'
      },
      {
        title: 'WRAA720-band-plan.xlsx',
        url: '/assets/docs/WRAA720-band-plan.xlsx'
      }
    ];
  }
}
