import { Component, OnInit } from '@angular/core';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage-radio-bandplan',
  templateUrl: './bandplan.component.html',
  styleUrls: ['./bandplan.component.scss'],
})
export class BandplanComponent implements OnInit {
  faBroadcastTower = faBroadcastTower;
  tableRows: Array<any>;

  constructor() {}

  ngOnInit() {
    this.setBandPlan();
  }

  private setBandPlan(): void {
    this.tableRows = [
      {
        channel: '1',
        name: 'Ch 1 Simplex',
        frequency: '462.5625 MHz',
        tone: '',
        bandwidth: 'Narrow',
        power: 'Low',
        notes: 'FRS 1/Natl Simplex',
      },
      {
        channel: '2',
        name: 'Ch 2 Simplex',
        frequency: '462.5875 MHz',
        tone: '',
        bandwidth: 'Narrow',
        power: 'Low',
        notes: 'FRS 2',
      },
      {
        channel: '3',
        name: 'Ch 3 Simplex',
        frequency: '462.6125 MHz',
        tone: '',
        bandwidth: 'Narrow',
        power: 'Low',
        notes: 'FRS 3',
      },
      {
        channel: '4',
        name: 'Ch 4 Simplex',
        frequency: '462.5375 MHz',
        tone: '',
        bandwidth: 'Narrow',
        power: 'Low',
        notes: 'FRS 4',
      },
      {
        channel: '5',
        name: 'Ch 5 Simplex',
        frequency: '462.6675 MHz',
        tone: '',
        bandwidth: 'Narrow',
        power: 'Low',
        notes: 'FRS 5',
      },
      {
        channel: '6',
        name: 'Ch 6 Simplex',
        frequency: '462.6875 MHz',
        tone: '',
        bandwidth: 'Narrow',
        power: 'Low',
        notes: 'FRS 6',
      },
      {
        channel: '7',
        name: 'Ch 7 Simplex',
        frequency: '462.7125 MHz',
        tone: '',
        bandwidth: 'Narrow',
        power: 'Low',
        notes: 'FRS 7',
      },
      {
        channel: '8',
        name: 'Ch 8 Simplex',
        frequency: '462.5500 MHz',
        tone: '141.3 Hz',
        bandwidth: 'Narrow',
        power: 'High',
        notes: 'GMRS 15/PHX 550 T',
      },
      {
        channel: '9',
        name: 'Ch 9 Simplex',
        frequency: '462.5750 MHz',
        tone: '69.3 Hz',
        bandwidth: 'Narrow',
        power: 'High',
        notes: 'GMRS 16',
      },
      {
        channel: '10',
        name: 'Ch 10 Simplex',
        frequency: '462.6000 MHz',
        tone: '69.3 Hz',
        bandwidth: 'Narrow',
        power: 'High',
        notes: 'GMRS 17',
      },
      {
        channel: '11',
        name: 'Ch 11 Simplex',
        frequency: '462.6250 MHz',
        tone: '69.3 Hz',
        bandwidth: 'Narrow',
        power: 'High',
        notes: 'GMRS 18',
      },
      {
        channel: '12',
        name: 'Ch 12 Simplex',
        frequency: '462.6500 MHz',
        tone: '69.3 Hz',
        bandwidth: 'Narrow',
        power: 'High',
        notes: 'GMRS 19',
      },
      {
        channel: '13',
        name: 'Ch 13 Simplex',
        frequency: '462.6750 MHz',
        tone: '141.3 Hz',
        bandwidth: 'Narrow',
        power: 'High',
        notes: 'GMRS 20/Natl Simplex',
      },
      {
        channel: '14',
        name: 'Ch 14 Simplex',
        frequency: '462.7000 MHz',
        tone: '141.3 Hz',
        bandwidth: 'Narrow',
        power: 'High',
        notes: 'GMRS 21/Camping Alpha',
      },
      {
        channel: '15',
        name: 'Ch 15 Simplex',
        frequency: '462.7250 MHz',
        tone: '69.3 Hz',
        bandwidth: 'Narrow',
        power: 'High',
        notes: 'GMRS 22/Camping Bravo',
      },
      {
        channel: '16',
        name: 'Ch 16 Simplex',
        frequency: '462.5750 MHz',
        tone: '',
        bandwidth: 'Narrow',
        power: 'High',
        notes: 'GMRS 16/4x4 Off-Road Channel',
      },
    ];
  }
}
