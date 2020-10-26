import { Component, OnInit } from '@angular/core';

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
    this.setEducationLinks();
    this.setCertLinks();
    this.setBlogLinks();
    this.setDevLinks();
  }

  private setEducationLinks(): void {
    this.educationLinks = [
      {
        title: 'University of Wisconsin-Madison (BS Geography/GIS)',
        url: 'https://www.wisc.edu',
        imgUrl: 'assets/images/uw.png',
        imgAlt: 'UW Logo',
      },
    ];
  }

  private setCertLinks(): void {
    this.certLinks = [
      {
        title: 'Microsoft Technology Associate: Developer',
        url: 'https://www.youracclaim.com/badges/637f3b5b-ff54-4815-901a-34081bf83e79/',
        imgUrl: 'assets/images/mta.png',
        imgAlt: 'MTA Logo',
      },
      {
        title: 'Amateur Radio License: Technician Class',
        url: 'https://wireless2.fcc.gov/UlsApp/UlsSearch/license.jsp?licKey=3987237',
        imgUrl: 'assets/images/fcc.png',
        imgAlt: 'FCC Logo',
      },
    ];
  }

  private setBlogLinks(): void {
    this.blogLinks = [
      {
        title: 'Booting a virtual machine from a physical Windows disk partition',
        url:
          'https://seesharpdotnet.wordpress.com/2020/06/15/booting-a-virtual-machine-from-a-physical-windows-disk-partition/',
      },
      {
        title: 'K7MFC mobile shack: 2019 Ford F-150 XLT',
        url: 'https://seesharpdotnet.wordpress.com/2020/02/17/k7mfc-mobile-shack-2019-ford-f-150-xlt/',
      },
      {
        title: 'A really simple C# async example',
        url: 'https://seesharpdotnet.wordpress.com/2018/10/17/a-really-simple-c-async-example/',
      },
      {
        title: 'Refurbished Radio Shack Pro-2021',
        url: 'https://seesharpdotnet.wordpress.com/2018/08/25/refurbished-radio-shack-pro-2021/',
      },
      {
        title: 'The history behind 462.675 MHz and the travel tone',
        url: 'https://seesharpdotnet.wordpress.com/2018/07/29/the-history-behind-462-675-mhz-and-the-travel-tone/',
      },
      {
        title: 'K7MFC Field Report: Four Peaks, AZ',
        url: 'https://seesharpdotnet.wordpress.com/2018/07/15/k7mfc-field-report-four-peaks-az/',
      },
      {
        title: 'Cool Microsoft Backgrounds',
        url: 'https://seesharpdotnet.wordpress.com/2018/02/22/cool-windows-backgrounds/',
      },
      {
        title: 'Which programming language is used in the computer of a car?',
        url:
          'https://seesharpdotnet.wordpress.com/2017/08/08/which-programming-language-is-used-in-the-computer-of-a-car/',
      },
    ];
  }

  private setDevLinks(): void {
    this.devLinks = [
      {
        title: 'C#',
        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
        imgUrl: 'assets/images/csharp-logo.png',
        imgAlt: 'CSharp Logo',
      },
      {
        title: 'Python',
        url: 'https://www.python.org/',
        imgUrl: 'assets/images/python-logo.png',
        imgAlt: 'Python Logo',
      },
      {
        title: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
        imgUrl: 'assets/images/typescript-logo.png',
        imgAlt: ' Logo',
      },
      {
        title: '.NET Framework',
        url: 'https://docs.microsoft.com/en-us/dotnet/core/',
        imgUrl: 'assets/images/dotnet-logo.png',
        imgAlt: '.NET Core Logo',
      },
      {
        title: 'Angular',
        url: 'https://angular.io/',
        imgUrl: 'assets/images/angular-logo.png',
        imgAlt: 'Angular Logo',
      },
      {
        title: 'Rider',
        url: 'https://www.jetbrains.com/rider/',
        imgUrl: 'assets/images/rider-logo.png',
        imgAlt: 'Rider Logo',
      },
      {
        title: 'Visual Studio',
        url: 'https://visualstudio.microsoft.com/',
        imgUrl: 'assets/images/visual-studio-logo.png',
        imgAlt: 'VS Logo',
      },
      {
        title: 'Visual Studio Code',
        url: 'https://code.visualstudio.com/',
        imgUrl: 'assets/images/visual-studio-code-logo.png',
        imgAlt: 'VS Code Logo',
      },
      {
        title: 'Linux Mint',
        url: 'https://linuxmint.com/',
        imgUrl: 'assets/images/linux-mint-logo.png',
        imgAlt: 'Linux Mint Logo',
      },
      {
        title: 'GitKraken',
        url: 'https://www.gitkraken.com/',
        imgUrl: 'assets/images/gitkraken-logo.png',
        imgAlt: 'GitKraken Logo',
      },
      {
        title: 'Postman',
        url: 'https://www.getpostman.com/',
        imgUrl: 'assets/images/postman-logo.png',
        imgAlt: 'Postman Logo',
      },
      {
        title: 'Notepad',
        url: 'http://www.notepad.org/',
        imgUrl: 'assets/images/notepad-logo.png',
        imgAlt: 'Notepad Logo',
      },
    ];
  }
}
