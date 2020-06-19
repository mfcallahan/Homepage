import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageMainComponent } from 'src/app/homepage/homepage-main/homepage-main.component';
import { HomepageRadioComponent } from 'src/app/homepage/homepage-radio/homepage-radio.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageMainComponent
  },
  {
    path: 'radio',
    component: HomepageRadioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
