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
import { AboutComponent } from './homepage/about/about.component';
import { RadioComponent } from './homepage-radio/radio/radio.component';
import { SidebarLinksComponent } from './sidebar-links/sidebar-links.component';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './lower-case-url-serializer';
import { SidebarImgLinksComponent } from './sidebar-img-links/sidebar-img-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilePicComponent,
    ContactLinksComponent,
    AboutComponent,
    RadioComponent,
    SidebarLinksComponent,
    SidebarImgLinksComponent
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
