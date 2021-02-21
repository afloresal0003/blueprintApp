import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestadPageRoutingModule } from './testad-routing.module';

import { TestadPage } from './testad.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestadPageRoutingModule
  ],
  declarations: [TestadPage]
})
export class TestadPageModule {}
