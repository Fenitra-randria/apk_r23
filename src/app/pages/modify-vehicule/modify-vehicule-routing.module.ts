import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyVehiculePage } from './modify-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyVehiculePageRoutingModule {}
