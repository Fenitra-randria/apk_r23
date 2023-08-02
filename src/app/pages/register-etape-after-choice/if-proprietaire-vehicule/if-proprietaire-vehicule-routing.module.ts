import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IfProprietaireVehiculePage } from './if-proprietaire-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: IfProprietaireVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IfProprietaireVehiculePageRoutingModule {}
