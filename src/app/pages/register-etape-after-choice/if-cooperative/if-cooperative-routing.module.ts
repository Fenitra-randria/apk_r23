import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IfCooperativePage } from './if-cooperative.page';

const routes: Routes = [
  {
    path: '',
    component: IfCooperativePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IfCooperativePageRoutingModule {}
