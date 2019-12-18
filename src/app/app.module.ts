import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ContactLinksComponent } from './homepage/contact-links/contact-links.component';
import { ContactLinksComponent as RadioContactLinksComponent } from './homepage-radio/contact-links/contact-links.component';
import { AboutComponent } from './homepage/about/about.component';
import { HomepageRadioComponent } from './homepage-radio/homepage-radio.component';
import { LinkListComponent } from './link-list/link-list.component';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './lowerCaseUrlSerializer';
import { LinkImgListComponent } from './link-img-list/link-img-list.component';
import { IntroComponent } from './homepage-radio/about/about.component';
import { GalleryComponent } from './homepage-radio/gallery/gallery.component';
import { CustomHammerConfig } from './hammerGestureConfig';
import { BandplanComponent } from './homepage-radio/bandplan/bandplan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProfilePicComponent,
    ContactLinksComponent,
    RadioContactLinksComponent,
    AboutComponent,
    HomepageRadioComponent,
    LinkListComponent,
    LinkImgListComponent,
    IntroComponent,
    GalleryComponent,
    BandplanComponent
  ],
  imports: [BrowserModule, FontAwesomeModule, NgbModule, LightboxModule, NgxGalleryModule, AppRoutingModule],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
