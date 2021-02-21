import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TimerAppPageRoutingModule } from './timer-app-routing.module';

import { TimerAppPage } from './timer-app.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [ 
    MbscModule,  
    CommonModule,
    IonicModule,
    TimerAppPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TimerAppPage]
})
export class TimerAppPageModule {}
