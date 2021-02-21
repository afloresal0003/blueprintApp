import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestadPage } from './testad.page';

const routes: Routes = [
  {
    path: '',
    component: TestadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestadPageRoutingModule {}
