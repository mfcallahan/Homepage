import { Component, OnInit } from '@angular/core';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

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
    this.tableRows = environment.baseConfigs.radio.bandPlan;
  }
}
