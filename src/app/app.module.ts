import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ContactLinksComponent } from './homepage/contact-links/contact-links.component';
import { AboutComponent } from './homepage/about/about.component';
import { HomepageRadioComponent } from './homepage-radio/homepage-radio.component';
import { LinkListComponent } from './link-list/link-list.component';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './lower-case-url-serializer';
import { SidebarImgLinksComponent } from './sidebar-img-links/sidebar-img-links.component';
import { IntroComponent } from './homepage-radio/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfilePicComponent,
    ContactLinksComponent,
    AboutComponent,
    HomepageRadioComponent,
    LinkListComponent,
    SidebarImgLinksComponent,
    IntroComponent
  ],
  imports: [BrowserModule, FontAwesomeModule, NgbModule, LightboxModule, AppRoutingModule],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
