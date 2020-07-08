import { Component, OnInit } from '@angular/core';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage-radio',
  templateUrl: './homepage-radio.component.html',
  styleUrls: ['./homepage-radio.component.scss'],
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
    this.setClubLinks();
    this.setClubLinks();
    this.setRadioLinks();
    this.setDownloadLinks();
    this.setRadioMapLinks();
    this.setRadioBlogLinks();
  }

  private setClubLinks() {
    this.clubLinks = [
      {
        title: 'Arizona GMRS Repeater Club',
        url: 'https://www.azgmrs.org/welcome.php',
        imgUrl: 'assets/images/agrc.png',
        imgAlt: 'AGRC Logo',
      },
      {
        title: 'Arizona Repeater Association',
        url: 'http://w7ara.org/',
        imgUrl: 'assets/images/ara.png',
        imgAlt: 'ARA Logo',
      },
    ];
  }

  private setLicenseLinks() {
    this.licenseLinks = [
      { title: 'How to get a GMRS license', url: 'https://www.azgmrs.org/how-to-get-a-gmrs-license.php' },
      { title: 'hamstudy.org - My favorite ham radio exam preparation resource', url: 'https://hamstudy.org/' },
      {
        title: 'ARRL - Find an amateur radio exam session',
        url: 'http://www.arrl.org/find-an-amateur-radio-license-exam-session',
      },
      { title: 'FCC Universal Licensing System', url: 'https://wireless2.fcc.gov/UlsEntry/licManager/login.jsp' },
    ];
  }

  private setRadioLinks() {
    this.radioLinks = [
      { title: 'Arizona Repeaters Directory', url: 'http://www.azrepeaters.net/' },
      { title: 'Arizona Repeater Association', url: 'https://www.w7ara.org/' },
      { title: 'RadioReference.com - AZ Database', url: 'https://www.radioreference.com/apps/db/?stid=4' },
      {
        title: 'RadioReference.com - AZ Discussion Forum',
        url: 'https://forums.radioreference.com/forums/arizona-radio-discussion-forum.36/',
      },
      { title: 'US Amateur Radio Frequency Allocations', url: 'http://www.arrl.org/frequency-allocations' },
      { title: 'US Nationwide Amateur Frequencies', url: 'https://www.radioreference.com/apps/db/?aid=7771' },
      {
        title: 'FRS/GMRS combined channel chart',
        url: 'https://wiki.radioreference.com/index.php/FRS/GMRS_combined_channel_chart',
      },
      { title: 'FCC License/Call Sign Search', url: 'https://wireless2.fcc.gov/UlsApp/UlsSearch/searchAdvanced.jsp' },
      {
        title: 'The Antenna Farm: Antenna Tutorial',
        url: 'https://www.theantennafarm.com/catalog/index.php?main_page=antenna_tutorial_page',
      },
      { title: 'KD4SAI VHF/UHF Line of Sight Calculator', url: 'https://www.qsl.net/kd4sai/distance.html' },
      {
        title: 'CHIRP - open source radio programming software',
        url: 'https://chirp.danplanet.com/projects/chirp/wiki/Home',
      },
      { title: 'miklor.com - Radio Information & Support Site', url: 'http://www.miklor.com/' },
      { title: 'ScannerMaster.com - The scanner experts!', url: 'https://www.scannermaster.com/' },
    ];
  }

  private setDownloadLinks() {
    this.downloadLinks = [
      {
        title: 'WRAA720-band-plan.csv',
        url: 'assets/docs/WRAA720-band-plan.csv',
      },
      {
        title: 'WRAA720-band-plan.xlsx',
        url: 'assets/docs/WRAA720-band-plan.xlsx',
      },
    ];
  }

  private setRadioMapLinks() {
    this.radioMapLinks = [
      { title: 'AGRC Repeater Map', url: 'https://www.azgmrs.org/club-repeaters.php' },
      { title: 'MyGMRS.com Repeater Map', url: 'https://www.mygmrs.com/map/' },
      { title: 'NOAA Weather Radio Coverage Map', url: 'http://www.nws.noaa.gov/nwr/Maps/PHP/AZ.php' },
      { title: 'Arizona Repeaters Association Repeater Map', url: 'http://new.w7ara.org/map/Arizona1.Aspx' },
      { title: 'US Call Sign Areas & Zones', url: 'http://hamwaves.com/map.us/en/index.html' },
    ];
  }

  private setRadioBlogLinks() {
    this.radioBlogLinks = [
      {
        title: 'K7MFC mobile shack: 2019 Ford F-150 XLT',
        url: 'https://seesharpdotnet.wordpress.com/2020/02/17/k7mfc-mobile-shack-2019-ford-f-150-xlt/',
      },
      {
        title: 'Refurbished Radio Shack Pro-2021',
        url: 'https://seesharpdotnet.wordpress.com/2018/08/25/refurbished-radio-shack-pro-2021/',
      },
      {
        title: 'How to get a GMRS License',
        url: 'https://seesharpdotnet.wordpress.com/2018/08/11/how-to-get-a-gmrs-license/',
      },
      {
        title: 'The history behind 462.675 MHz and the travel tone',
        url: 'https://seesharpdotnet.wordpress.com/2018/07/29/the-history-behind-462-675-mhz-and-the-travel-tone/',
      },
      {
        title: 'K7MFC mobile shack: 2013 F-150 Lariat 4×4',
        url: 'https://seesharpdotnet.wordpress.com/2018/07/01/k7mfc-mobile-shack-2013-f-150-lariat-4x4/',
      },
      {
        title: 'K7MFC Field Report: Four Peaks, AZ',
        url: 'https://seesharpdotnet.wordpress.com/2018/07/15/k7mfc-field-report-four-peaks-az/',
      },
      { title: 'BTECH GMRS-V1 Review', url: 'https://seesharpdotnet.wordpress.com/2017/11/14/btech-gmrs-v1-review/' },
    ];
  }
}
