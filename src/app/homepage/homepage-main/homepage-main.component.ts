import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { ImageLink } from 'src/app/models/imageLink';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage-main.component.html',
  styleUrls: ['./homepage-main.component.scss'],
})
export class HomepageMainComponent implements OnInit {
  educationLinks: ImageLink[];
  certLinks: ImageLink[];
  blogLinks: Link[];
  devLinks: ImageLink[];

  constructor() {}

  ngOnInit() {
    this.educationLinks = this.getEducationLinks();
    this.certLinks = this.getCertLinks();
    this.blogLinks = this.getBlogLinks();
    this.devLinks = this.getDevLinks();
  }

  private getEducationLinks(): ImageLink[] {
    return [
      new ImageLink(
        'University of Wisconsin-Madison (BS, Geographic Information Systems)',
        'https://www.wisc.edu',
        'assets/images/uw.png',
        'UW Logo'
      ),
    ];
  }

  private getCertLinks(): ImageLink[] {
    return [
      new ImageLink(
        'Microsoft Technology Associate: Developer',
        'https://www.youracclaim.com/badges/637f3b5b-ff54-4815-901a-34081bf83e79/',
        'assets/images/mta.png',
        'MTA Logo'
      ),
      new ImageLink(
        'Amateur Radio License: Technician Class',
        'https://wireless2.fcc.gov/UlsApp/UlsSearch/license.jsp?licKey=3987237',
        'assets/images/fcc.png',
        'FCC Logo'
      ),
    ];
  }

  private getBlogLinks(): Link[] {
    return [
      new Link(
        'How to publish an ASP.NET web application to an Azure App Service from JetBrains Rider',
        'https://seesharpdotnet.wordpress.com/2020/11/09/how-to-publish-an-asp-dot-net-web-application-to-an-azure-app-service-from-jetbrains-rider/'
      ),
      new Link(
        'How to implement SignalR in a .NET Core 3.1 + Angular 10 web application',
        'https://seesharpdotnet.wordpress.com/2020/11/05/how-to-implement-signalr-in-a-net-core-angular-web-application/'
      ),
      new Link(
        'Booting a virtual machine from a physical Windows disk partition',
        'https://seesharpdotnet.wordpress.com/2020/06/15/booting-a-virtual-machine-from-a-physical-windows-disk-partition/'
      ),
      new Link(
        'K7MFC mobile shack: 2019 Ford F-150 XLT',
        'https://seesharpdotnet.wordpress.com/2020/02/17/k7mfc-mobile-shack-2019-ford-f-150-xlt/'
      ),
      new Link(
        'A really simple C# async example',
        'https://seesharpdotnet.wordpress.com/2018/10/17/a-really-simple-c-async-example/'
      ),
    ];
  }

  private getDevLinks(): ImageLink[] {
    return [
      new ImageLink(
        'C#',
        'https://docs.microsoft.com/en-us/dotnet/csharp/',
        'assets/images/csharp-logo.png',
        'CSharp Logo'
      ),
      new ImageLink('Python', 'https://www.python.org/', 'assets/images/python-logo.png', 'Python Logo'),
      new ImageLink(
        'TypeScript',
        'https://www.typescriptlang.org/',
        'assets/images/typescript-logo.png',
        'TypeScript Logo'
      ),
      new ImageLink(
        '.NET Framework',
        'https://docs.microsoft.com/en-us/dotnet/core/',
        'assets/images/dotnet-logo.png',
        '.NET Core Logo'
      ),
      new ImageLink('Angular', 'https://angular.io/', 'assets/images/angular-logo.png', 'Angular Logo'),
      new ImageLink('Rider', 'https://www.jetbrains.com/rider/', 'assets/images/rider-logo.png', ' Logo'),
      new ImageLink(
        'Visual Studio',
        'https://visualstudio.microsoft.com/',
        'assets/images/visual-studio-logo.png',
        'Rider Logo'
      ),
      new ImageLink(
        'Visual Studio Code',
        'https://code.visualstudio.com/',
        'assets/images/visual-studio-code-logo.png',
        'VS Code Logo'
      ),
      new ImageLink('Linux Mint', 'https://linuxmint.com/', 'assets/images/linux-mint-logo.png', 'Linux Mint Logo'),
      new ImageLink('Git', 'https://git-scm.com/', 'assets/images/git-logo.png', 'Git Logo'),
      new ImageLink('GitKraken', 'https://www.gitkraken.com/', 'assets/images/gitkraken-logo.png', 'GitKraken Logo'),
      new ImageLink('Postman', 'https://www.getpostman.com/', 'assets/images/postman-logo.png', 'Postman Logo'),
      new ImageLink('Meld', 'https://meldmerge.org/', 'assets/images/meld-logo.png', 'Meld Logo'),
      new ImageLink('Notepad', 'http://www.notepad.org/', 'assets/images/notepad-logo.png', 'Notepad Logo'),
    ];
  }
}
