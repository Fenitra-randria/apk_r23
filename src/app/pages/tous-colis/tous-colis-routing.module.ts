import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TousColisPage } from './tous-colis.page';

const routes: Routes = [
  {
    path: '',
    component: TousColisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TousColisPageRoutingModule {}
