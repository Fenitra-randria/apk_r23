import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDestinationPage } from './add-destination.page';

const routes: Routes = [
  {
    path: '',
    component: AddDestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDestinationPageRoutingModule {}
