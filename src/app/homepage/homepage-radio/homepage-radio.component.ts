import { Component, OnInit } from '@angular/core';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { ImageLink } from 'src/app/models/imageLink';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-homepage-radio',
  templateUrl: './homepage-radio.component.html',
  styleUrls: ['./homepage-radio.component.scss'],
})
export class HomepageRadioComponent implements OnInit {
  clubLinks: ImageLink[];
  licenseLinks: Link[];
  radioLinks: Link[];
  downloadLinks: Link[];
  radioMapLinks: Link[];
  radioBlogLinks: Link[];
  faWordpressSimple = faWordpressSimple;
  faMapMarker = faMapMarker;
  faBroadcastTower = faBroadcastTower;

  constructor() {}

  ngOnInit() {
    this.clubLinks = this.getClubLinks();
    this.licenseLinks = this.getLicenseLinks();
    this.radioLinks = this.getRadioLinks();
    this.downloadLinks = this.getDownloadLinks();
    this.radioMapLinks = this.getRadioMapLinks();
    this.radioBlogLinks = this.getRadioBlogLinks();
  }

  private getClubLinks(): ImageLink[] {
    return [
      new ImageLink(
        'Arizona GMRS Repeater Club',
        'https://www.azgmrs.org/welcome.php',
        'assets/images/agrc.png',
        'AGRC Logo'
      ),
      new ImageLink('Arizona Repeater Association', 'http://w7ara.org/', 'assets/images/ara.png', 'ARA Logo'),
    ];
  }

  private getLicenseLinks(): Link[] {
    return [
      new Link('How to get a GMRS license', 'https://www.azgmrs.org/how-to-get-a-gmrs-license.php'),
      new Link('hamstudy.org - My favorite ham radio exam preparation resource', 'https://hamstudy.org/'),
      new Link(
        'ARRL - Find an amateur radio exam session',
        'http://www.arrl.org/find-an-amateur-radio-license-exam-session'
      ),
      new Link('FCC Universal Licensing System', 'https://wireless2.fcc.gov/UlsEntry/licManager/login.jsp'),
    ];
  }

  private getRadioLinks(): Link[] {
    return [
      new Link('Arizona Repeaters Directory', 'http://www.azrepeaters.net/'),
      new Link('Arizona Repeater Association', 'https://www.w7ara.org/'),
      new Link('RadioReference.com - AZ Database', 'https://www.radioreference.com/apps/db/?stid=4'),
      new Link(
        'RadioReference.com - AZ Discussion Forum',
        'https://forums.radioreference.com/forums/arizona-radio-discussion-forum.36/'
      ),
      new Link('US Amateur Radio Frequency Allocations', 'http://www.arrl.org/frequency-allocations'),
      new Link('US Nationwide Amateur Frequencies', 'https://www.radioreference.com/apps/db/?aid=7771'),
      new Link(
        'FRS/GMRS combined channel chart',
        'https://wiki.radioreference.com/index.php/FRS/GMRS_combined_channel_chart'
      ),
      new Link('FCC License/Call Sign Search', 'https://wireless2.fcc.gov/UlsApp/UlsSearch/searchAdvanced.jsp'),
      new Link(
        'The Antenna Farm: Antenna Tutorial',
        'https://www.theantennafarm.com/catalog/index.php?main_page=antenna_tutorial_page'
      ),
      new Link('KD4SAI VHF/UHF Line of Sight Calculator', 'https://www.qsl.net/kd4sai/distance.html'),
      new Link(
        'CHIRP - open source radio programming software',
        'https://chirp.danplanet.com/projects/chirp/wiki/Home'
      ),
      new Link('miklor.com - Radio Information & Support Site', 'http://www.miklor.com/'),
      new Link('ScannerMaster.com - The scanner experts!', 'https://www.scannermaster.com/'),
    ];
  }

  private getDownloadLinks(): Link[] {
    return [
      new Link('WRAA720-band-plan.csv', 'assets/docs/WRAA720-band-plan.csv'),
      new Link('WRAA720-band-plan.xlsx', 'assets/docs/WRAA720-band-plan.xlsx'),
    ];
  }

  private getRadioMapLinks(): Link[] {
    return [
      new Link('AGRC Repeater Map', 'https://www.azgmrs.org/club-repeaters.php'),
      new Link('MyGMRS.com Repeater Map', 'https://www.mygmrs.com/map/'),
      new Link('NOAA Weather Radio Coverage Map', 'http://www.nws.noaa.gov/nwr/Maps/PHP/AZ.php'),
      new Link('Arizona Repeaters Association Repeater Map', 'http://new.w7ara.org/map/Arizona1.Aspx'),
      new Link('US Call Sign Areas & Zones', 'http://hamwaves.com/map.us/en/index.html'),
    ];
  }

  private getRadioBlogLinks(): Link[] {
    return [
      new Link(
        'K7MFC mobile shack: 2019 Ford F-150 XLT',
        'https://mfcallahan.blog/2020/02/17/k7mfc-mobile-shack-2019-ford-f-150-xlt/'
      ),
      new Link(
        'Refurbished Radio Shack Pro-2021',
        'https://mfcallahan.blog/2018/08/25/refurbished-radio-shack-pro-2021/'
      ),
      new Link('How to get a GMRS License', 'https://mfcallahan.blog/2018/08/11/how-to-get-a-gmrs-license/'),
      new Link(
        'The history behind 462.675 MHz and the travel tone',
        'https://mfcallahan.blog/2018/07/29/the-history-behind-462-675-mhz-and-the-travel-tone/'
      ),
      new Link(
        'K7MFC mobile shack: 2013 F-150 Lariat 4×4',
        'https://mfcallahan.blog/2018/07/01/k7mfc-mobile-shack-2013-f-150-lariat-4x4/'
      ),
      new Link(
        'K7MFC Field Report: Four Peaks, AZ',
        'https://mfcallahan.blog/2018/07/15/k7mfc-field-report-four-peaks-az/'
      ),
      new Link('BTECH GMRS-V1 Review', 'https://mfcallahan.blog/2017/11/14/btech-gmrs-v1-review/'),
    ];
  }
}
