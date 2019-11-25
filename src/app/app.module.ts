import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home/home.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { ContactLinksComponent } from './homepage/contact-links/contact-links.component';
import { EducationCertLinksComponent } from './homepage/education-cert-links/education-cert-links.component';
import { AboutComponent } from './homepage/about/about.component';
import { RadioComponent } from './homepage-radio/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilePicComponent,
    ContactLinksComponent,
    EducationCertLinksComponent,
    AboutComponent,
    RadioComponent
  ],
  imports: [BrowserModule, FontAwesomeModule, NgbModule, LightboxModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
