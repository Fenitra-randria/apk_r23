import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IfVoyageurPage } from './if-voyageur.page';

const routes: Routes = [
  {
    path: '',
    component: IfVoyageurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IfVoyageurPageRoutingModule {}
