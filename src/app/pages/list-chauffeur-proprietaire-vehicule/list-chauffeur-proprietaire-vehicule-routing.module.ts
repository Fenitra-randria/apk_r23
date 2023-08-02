import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListChauffeurProprietaireVehiculePage } from './list-chauffeur-proprietaire-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: ListChauffeurProprietaireVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListChauffeurProprietaireVehiculePageRoutingModule {}
