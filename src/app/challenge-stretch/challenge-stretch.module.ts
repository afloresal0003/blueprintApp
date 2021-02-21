import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeStretchPageRoutingModule } from './challenge-stretch-routing.module';

import { ChallengeStretchPage } from './challenge-stretch.page';

@NgModule({
  imports: [ 
    MbscModule,  
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeStretchPageRoutingModule
  ],
  declarations: [ChallengeStretchPage]
})
export class ChallengeStretchPageModule {}
