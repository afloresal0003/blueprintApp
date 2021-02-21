import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeUpperPageRoutingModule } from './challenge-upper-routing.module';

import { ChallengeUpperPage } from './challenge-upper.page';

@NgModule({
  imports: [ 
    MbscModule,  
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeUpperPageRoutingModule
  ],
  declarations: [ChallengeUpperPage]
})
export class ChallengeUpperPageModule {}
