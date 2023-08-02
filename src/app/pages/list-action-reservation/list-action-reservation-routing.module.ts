import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListActionReservationPage } from './list-action-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: ListActionReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListActionReservationPageRoutingModule {}
