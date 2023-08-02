import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfocooperativePage } from './infocooperative.page';

const routes: Routes = [
  {
    path: '',
    component: InfocooperativePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfocooperativePageRoutingModule {}
