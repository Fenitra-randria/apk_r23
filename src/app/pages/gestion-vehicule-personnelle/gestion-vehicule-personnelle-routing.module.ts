import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionVehiculePersonnellePage } from './gestion-vehicule-personnelle.page';

const routes: Routes = [
  {
    path: '',
    component: GestionVehiculePersonnellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionVehiculePersonnellePageRoutingModule {}
