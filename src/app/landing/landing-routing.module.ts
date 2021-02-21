import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPage } from './landing.page';

import { Tab1Page } from '../tab1/tab1.page';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingPage,
  },
{
  path: 'tab1',
  component: Tab1Page
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
