import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegleConfidentialityPage } from './regle-confidentiality.page';

const routes: Routes = [
  {
    path: '',
    component: RegleConfidentialityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegleConfidentialityPageRoutingModule {}
