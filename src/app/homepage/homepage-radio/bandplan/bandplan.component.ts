import { Component, OnInit } from '@angular/core';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { BandplanTableRow } from 'src/app/models/bandplanTableRow';

@Component({
  selector: 'app-homepage-radio-bandplan',
  templateUrl: './bandplan.component.html',
  styleUrls: ['./bandplan.component.scss'],
})
export class BandplanComponent implements OnInit {
  faBroadcastTower = faBroadcastTower;
  tableRows: BandplanTableRow[];

  constructor() {}

  ngOnInit() {
    this.tableRows = this.getBandPlan();
  }

  private getBandPlan(): BandplanTableRow[] {
    return [
      new BandplanTableRow('1', 'Ch 1 Simplex', '462.5625 MHz', '', 'Narrow', 'Low', 'FRS 1/Natl Simplex'),
      new BandplanTableRow('2', 'Ch 2 Simplex', '462.5875 MHz', '', 'Narrow', 'Low', 'FRS 2'),
      new BandplanTableRow('3', 'Ch 3 Simplex', '462.6125 MHz', '', 'Narrow', 'Low', 'FRS 3'),
      new BandplanTableRow('4', 'Ch 4 Simplex', '462.5375 MHz', '', 'Narrow', 'Low', 'FRS 4'),
      new BandplanTableRow('5', 'Ch 5 Simplex', '462.6675 MHz', '', 'Narrow', 'Low', 'FRS 5'),
      new BandplanTableRow('6', 'Ch 6 Simplex', '462.6875 MHz', '', 'Narrow', 'Low', 'FRS 6'),
      new BandplanTableRow('7', 'Ch 7 Simplex', '462.7125 MHz', '', 'Narrow', 'Low', 'FRS 7'),
      new BandplanTableRow('8', 'Ch 8 Simplex', '462.5500 MHz', '141.3 Hz', 'Narrow', 'High', 'GMRS 15/PHX 550 T'),
      new BandplanTableRow('9', 'Ch 9 Simplex', '462.5750 MHz', '69.3 Hz', 'Narrow', 'High', 'GMRS 16'),
      new BandplanTableRow('10', 'Ch 10 Simplex', '462.6000 MHz', '69.3 Hz', 'Narrow', 'High', 'GMRS 17'),
      new BandplanTableRow('11', 'Ch 11 Simplex', '462.6250 MHz', '69.3 Hz', 'Narrow', 'High', 'GMRS 18'),
      new BandplanTableRow('12', 'Ch 12 Simplex', '462.6500 MHz', '69.3 Hz', 'Narrow', 'High', 'GMRS 19'),
      new BandplanTableRow('13', 'Ch 13 Simplex', '462.6750 MHz', '141.3 Hz', 'Narrow', 'High', 'GMRS 20/Natl Simplex'),
      new BandplanTableRow(
        '14',
        'Ch 14 Simplex',
        '462.7000 MHz',
        '141.3 Hz',
        'Narrow',
        'High',
        'GMRS 21/Camping Alpha'
      ),
      new BandplanTableRow('15', 'Ch 15 Simplex', '462.7250 MHz', '69.3 Hz', 'Narrow', 'High', 'GMRS 22/Camping Bravo'),
      new BandplanTableRow(
        '16',
        'Ch 16 Simplex',
        '462.5750 MHz',
        '69.3 Hz',
        'Narrow',
        'High',
        'GMRS 16/4x4 Off-Road Channel'
      ),
    ];
  }
}
