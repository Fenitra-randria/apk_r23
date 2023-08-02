import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenuPage } from './revenu.page';

const routes: Routes = [
  {
    path: '',
    component: RevenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevenuPageRoutingModule {}
