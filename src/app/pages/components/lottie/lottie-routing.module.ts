import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LottiePage } from './lottie.page';

const routes: Routes = [
  {
    path: '',
    component: LottiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LottiePageRoutingModule {}
