import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaffeurPage } from './chaffeur.page';

const routes: Routes = [
  {
    path: '',
    component: ChaffeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaffeurPageRoutingModule {}
