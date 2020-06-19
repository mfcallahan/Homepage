import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage-main.component.html',
  styleUrls: ['./homepage-main.component.scss'],
})
export class HomepageMainComponent implements OnInit {
  educationLinks: Array<any>;
  certLinks: Array<any>;
  blogLinks: Array<any>;
  devLinks: Array<any>;

  constructor() {}

  ngOnInit() {
    this.educationLinks = environment.baseConfigs.home.educationLinks;
    this.certLinks = environment.baseConfigs.home.certLinks;
    this.blogLinks = environment.baseConfigs.home.blogLinks;
    this.devLinks = environment.baseConfigs.home.devLinks;
  }
}
