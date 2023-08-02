import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListActionProfilePage } from './list-action-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ListActionProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListActionProfilePageRoutingModule {}
