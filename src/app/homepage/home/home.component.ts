import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  educationLinks: Array<any>;
  certLinks: Array<any>;
  blogLinks: Array<any>;
  devLinks: Array<any>;

  constructor() {}

  ngOnInit() {
    this.educationLinks = [
      {
        title: 'University of Wisconsin-Madison (BS Geography/GIS)',
        url: 'https://www.wisc.edu',
        imgUrl: 'assets/images/uw.png',
        imgAlt: 'UW Logo'
      }
    ];

    this.certLinks = [
      {
        title: 'Microsoft Technology Associate: Developer',
        url: 'https://www.youracclaim.com/badges/637f3b5b-ff54-4815-901a-34081bf83e79/',
        imgUrl: 'assets/images/mta.png',
        imgAlt: 'MTA Logo'
      },
      {
        title: 'Amateur Radio License: Technician Class',
        url: 'https://wireless2.fcc.gov/UlsApp/UlsSearch/license.jsp?licKey=3987237',
        imgUrl: 'assets/images/fcc.png',
        imgAlt: 'FCC Logo'
      }
    ];

    this.blogLinks = environment.baseConfigs.blogLinks;
    this.devLinks = environment.baseConfigs.devLinks;
  }
}
