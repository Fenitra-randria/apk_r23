import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuGestionVehiculePage } from './menu-gestion-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: MenuGestionVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuGestionVehiculePageRoutingModule {}
