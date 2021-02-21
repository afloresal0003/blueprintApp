import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeNewPageRoutingModule } from './challenge-new-routing.module';

import { ChallengeNewPage } from './challenge-new.page';
//import { TimerAppPage } from '../timer-app/timer-app.page';


@NgModule({
  imports: [ 
    MbscModule,  
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeNewPageRoutingModule,
    //TimerAppPage,
  ],
  declarations: [ChallengeNewPage]
})
export class ChallengeNewPageModule {}
