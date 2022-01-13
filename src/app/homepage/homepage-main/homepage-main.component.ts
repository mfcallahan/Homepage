import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { ImageLink } from 'src/app/models/imageLink';
import { ApiService } from 'src/app/services/api.service';
import { HttpParams } from '@angular/common/http';
import { EnvironmentService } from 'src/app/services/environment.service';

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

  constructor(private readonly environment: EnvironmentService, private readonly apiService: ApiService) {}

  ngOnInit() {
    this.setBlogLinks();
    this.educationLinks = this.getEducationLinks();
    this.certLinks = this.getCertLinks();
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

  private setBlogLinks(): void {
    this.blogLinks = [];
    const params = new HttpParams().set('number', '5').set('fields', 'title,URL');

    this.apiService.get(this.environment.baseConfigs.wordPressApi.posts, params).subscribe((response: any) => {
      response.posts.forEach((post: any) => {
        // temp hack fix for HTML entities not decoding correctly
        let title = post.title.replace('&#8230;', '');
        title = title.replace('&#8211;', '');

        this.blogLinks.push(new Link(title, post.URL));
      });
    });
  }

  private getDevLinks(): ImageLink[] {
    return [
      new ImageLink('Pop!_OS', 'https://pop.system76.com/', 'assets/images/popos-logo.png', 'Pop!_OS Logo'),
      new ImageLink(
        'C#',
        'https://docs.microsoft.com/en-us/dotnet/csharp/',
        'assets/images/csharp-logo.png',
        'CSharp Logo'
      ),
      new ImageLink(
        '.NET Framework',
        'https://docs.microsoft.com/en-us/dotnet/core/',
        'assets/images/dotnet-logo.png',
        '.NET Core Logo'
      ),
      new ImageLink('Python', 'https://www.python.org/', 'assets/images/python-logo.png', 'Python Logo'),
      new ImageLink(
        'TypeScript',
        'https://www.typescriptlang.org/',
        'assets/images/typescript-logo.png',
        'TypeScript Logo'
      ),
      new ImageLink(
        'JavaScript',
        'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
        'assets/images/javascript-logo.png',
        'JavaScript Logo'
      ),
      new ImageLink('Angular', 'https://angular.io/', 'assets/images/angular-logo.png', 'Angular Logo'),
      new ImageLink('Vue.js', 'https://vuejs.org/', 'assets/images/vue-logo.png', 'Vue Logo'),
      new ImageLink('WebStorm', 'https://www.jetbrains.com/webstorm/', 'assets/images/webstorm-logo.png', 'WebStorm Logo'),
      new ImageLink('Rider', 'https://www.jetbrains.com/rider/', 'assets/images/rider-logo.png', 'Rider Logo'),
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
      new ImageLink('Git', 'https://git-scm.com/', 'assets/images/git-logo.png', 'Git Logo'),
      new ImageLink('GitKraken', 'https://www.gitkraken.com/', 'assets/images/gitkraken-logo.png', 'GitKraken Logo'),
      new ImageLink('Postman', 'https://www.getpostman.com/', 'assets/images/postman-logo.png', 'Postman Logo'),
      new ImageLink(
        'Beyond Compare',
        'https://scootersoftware.com/',
        'assets/images/beyondcompare-logo.png',
        'Beyond Compare Logo'
      ),
      new ImageLink('ArcGIS', 'https://developers.arcgis.com/', 'assets/images/esri-logo.png', 'ArcGIS Logo'),
      new ImageLink('Notepad', 'http://www.notepad.org/', 'assets/images/notepad-logo.png', 'Notepad Logo'),
    ];
  }
}
