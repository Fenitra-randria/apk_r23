import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobaleModalePage } from './globale-modale.page';

const routes: Routes = [
  {
    path: '',
    component: GlobaleModalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobaleModalePageRoutingModule {}
