import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InviteAmisPage } from './invite-amis.page';

const routes: Routes = [
  {
    path: '',
    component: InviteAmisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InviteAmisPageRoutingModule {}
