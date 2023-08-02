import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationEnlignPage } from './reservation-enlign.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationEnlignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationEnlignPageRoutingModule {}
