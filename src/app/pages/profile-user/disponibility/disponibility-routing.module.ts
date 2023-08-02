import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisponibilityPage } from './disponibility.page';

const routes: Routes = [
  {
    path: '',
    component: DisponibilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisponibilityPageRoutingModule {}
