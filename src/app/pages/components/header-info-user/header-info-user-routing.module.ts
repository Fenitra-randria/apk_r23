import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderInfoUserPage } from './header-info-user.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderInfoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderInfoUserPageRoutingModule {}
