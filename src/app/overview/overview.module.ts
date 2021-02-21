import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { DataService } from '../services/data.service';
import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';

import { OverviewPage } from './overview.page';

@NgModule({
  imports: [ 
    MbscModule,  
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule, ReactiveFormsModule
    //DataService,
  ],
  declarations: [OverviewPage]
})
export class OverviewPageModule {}
