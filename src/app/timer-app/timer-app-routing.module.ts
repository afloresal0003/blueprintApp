import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerAppPage } from './timer-app.page';
import { OverviewPage } from '../overview/overview.page';

const routes: Routes = [
  {
    path: '',
    component: TimerAppPage
  },
  {
    path: '/overview',
    component: OverviewPage
  },
];

@NgModule({
  imports: [ 
    MbscModule,  
    FormsModule,  
RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerAppPageRoutingModule {}
