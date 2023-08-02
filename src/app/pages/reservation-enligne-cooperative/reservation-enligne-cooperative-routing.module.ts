import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationEnligneCooperativePage } from './reservation-enligne-cooperative.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationEnligneCooperativePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationEnligneCooperativePageRoutingModule {}
