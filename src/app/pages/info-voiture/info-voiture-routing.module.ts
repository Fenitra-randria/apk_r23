import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoVoiturePage } from './info-voiture.page';

const routes: Routes = [
  {
    path: '',
    component: InfoVoiturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoVoiturePageRoutingModule {}
