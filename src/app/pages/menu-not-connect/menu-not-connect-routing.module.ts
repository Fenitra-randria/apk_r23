import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuNotConnectPage } from './menu-not-connect.page';

const routes: Routes = [
  {
    path: '',
    component: MenuNotConnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuNotConnectPageRoutingModule {}
