import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageMainComponent } from 'src/app/homepage/homepage-main/homepage-main.component';
import { HomepageRadioComponent } from 'src/app/homepage/homepage-radio/homepage-radio.component';
import { UrlRedirector } from 'src/app/urlRedirector';

const routes: Routes = [
  {
    path: '',
    component: HomepageMainComponent,
  },
  {
    path: 'radio',
    component: HomepageRadioComponent,
  },
  {
    path: 'resume',
    canActivate: [UrlRedirector],
    component: UrlRedirector,
    data: {
      externalUrl: '/assets/docs/Matthew_Callahan_resume.pdf',
    },
  },
  {
    path: 'blog',
    canActivate: [UrlRedirector],
    component: UrlRedirector,
    data: {
      externalUrl: 'https://mfcallahan.blog/',
    },
  },
  {
    path: 'github',
    canActivate: [UrlRedirector],
    component: UrlRedirector,
    data: {
      externalUrl: 'https://github.com/mfcallahan/',
    },
  },
  {
    path: 'linkedin',
    canActivate: [UrlRedirector],
    component: UrlRedirector,
    data: {
      externalUrl: 'https://www.linkedin.com/in/mfcallahan1/',
    },
  },
  {
    path: '**',
    canActivate: [UrlRedirector],
    component: UrlRedirector,
    data: {
      externalUrl: '',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
