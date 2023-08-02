import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVoiturePage } from './add-voiture.page';

const routes: Routes = [
  {
    path: '',
    component: AddVoiturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVoiturePageRoutingModule {}
