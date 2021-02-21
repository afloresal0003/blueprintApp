import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeLowerPageRoutingModule } from './challenge-lower-routing.module';

import { ChallengeLowerPage } from './challenge-lower.page';

@NgModule({
  imports: [ 
    MbscModule,  
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeLowerPageRoutingModule
  ],
  declarations: [ChallengeLowerPage]
})
export class ChallengeLowerPageModule {}
