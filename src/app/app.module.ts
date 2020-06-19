import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HomepageMainComponent } from 'src/app/homepage/homepage-main/homepage-main.component';
import { ProfilePicComponent } from 'src/app/homepage/profile-pic/profile-pic.component';
import { ContactLinksComponent } from 'src/app/homepage/homepage-main/contact-links/contact-links.component';
import { ContactLinksComponent as RadioContactLinksComponent } from 'src/app/homepage/homepage-radio/contact-links/contact-links.component';
import { AboutComponent } from 'src/app/homepage/homepage-main/about/about.component';
import { HomepageRadioComponent } from 'src/app/homepage/homepage-radio/homepage-radio.component';
import { LinkListComponent } from 'src/app/homepage/link-list/link-list.component';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from 'src/app/lowerCaseUrlSerializer';
import { LinkImgListComponent } from 'src/app/homepage/link-img-list/link-img-list.component';
import { IntroComponent } from 'src/app/homepage/homepage-radio/about/about.component';
import { GalleryComponent } from 'src/app/homepage/homepage-radio/gallery/gallery.component';
import { CustomHammerConfig } from 'src/app/hammerGestureConfig';
import { BandplanComponent } from 'src/app/homepage/homepage-radio/bandplan/bandplan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageMainComponent,
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
