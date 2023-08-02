import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToursVoiturePage } from './tours-voiture.page';

const routes: Routes = [
  {
    path: '',
    component: ToursVoiturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToursVoiturePageRoutingModule {}
