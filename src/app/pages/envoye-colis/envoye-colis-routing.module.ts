import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvoyeColisPage } from './envoye-colis.page';

const routes: Routes = [
  {
    path: '',
    component: EnvoyeColisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvoyeColisPageRoutingModule {}
