import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IfChauffeurPage } from './if-chauffeur.page';

const routes: Routes = [
  {
    path: '',
    component: IfChauffeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IfChauffeurPageRoutingModule {}
