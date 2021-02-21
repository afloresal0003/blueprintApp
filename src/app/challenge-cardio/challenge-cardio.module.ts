import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeCardioPageRoutingModule } from './challenge-cardio-routing.module';

import { ChallengeCardioPage } from './challenge-cardio.page';

@NgModule({
  imports: [ 
    MbscModule,  
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeCardioPageRoutingModule
  ],
  declarations: [ChallengeCardioPage]
})
export class ChallengeCardioPageModule {}
