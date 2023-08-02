import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionVehiculePage } from './gestion-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: GestionVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionVehiculePageRoutingModule {}
