import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionInvitationPage } from './action-invitation.page';

const routes: Routes = [
  {
    path: '',
    component: ActionInvitationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionInvitationPageRoutingModule {}
