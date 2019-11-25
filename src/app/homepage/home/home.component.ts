import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogLinks: Array<any>;
  devLinks: Array<any>;

  constructor() {}

  ngOnInit() {
    this.blogLinks = [
      {
        title: 'A really simple C# async example',
        url: 'https://seesharpdotnet.wordpress.com/2018/10/17/a-really-simple-c-async-example/'
      },
      {
        title: 'Refurbished Radio Shack Pro-2021',
        url: 'https://seesharpdotnet.wordpress.com/2018/08/25/refurbished-radio-shack-pro-2021/'
      },
      {
        title: 'The history behind 462.675 MHz and the travel tone',
        url: 'https://seesharpdotnet.wordpress.com/2018/07/29/the-history-behind-462-675-mhz-and-the-travel-tone/'
      },
      {
        title: 'K7MFC mobile shack: 2013 F-150 Lariat 4×4',
        url: 'https://seesharpdotnet.wordpress.com/2018/07/01/k7mfc-mobile-shack-2013-f-150-lariat-4x4/'
      },
      {
        title: 'K7MFC Field Report: Four Peaks, AZ',
        url: 'https://seesharpdotnet.wordpress.com/2018/07/15/k7mfc-field-report-four-peaks-az/'
      },
      { title: 'Cool Microsoft Backgrounds', url: 'https://seesharpdotnet.wordpress.com/2018/02/22/cool-windows-backgrounds/' },
      { title: 'BTECH GMRS-V1 Review', url: 'https://seesharpdotnet.wordpress.com/2017/11/14/btech-gmrs-v1-review/' },
      {
        title: 'Which programming language is used in the computer of a car?',
        url: 'https://seesharpdotnet.wordpress.com/2017/08/08/which-programming-language-is-used-in-the-computer-of-a-car/'
      }
    ];

    this.devLinks = [
      { title: 'C#', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
      { title: 'Python', url: 'https://www.python.org/' },
      { title: 'Angular', url: 'https://angular.io/' },
      { title: 'Visual Studio', url: 'https://visualstudio.microsoft.com/' },
      { title: 'Visual Studio Code', url: 'https://code.visualstudio.com/' },
      { title: 'GitKraken', url: 'https://www.gitkraken.com/' },
      { title: 'Postman', url: 'https://www.getpostman.com/' }
    ];
  }
}
