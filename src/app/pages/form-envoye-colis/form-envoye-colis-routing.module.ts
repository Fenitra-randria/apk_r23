import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormEnvoyeColisPage } from './form-envoye-colis.page';

const routes: Routes = [
  {
    path: '',
    component: FormEnvoyeColisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormEnvoyeColisPageRoutingModule {}
