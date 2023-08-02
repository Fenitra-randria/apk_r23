import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterMenuPage } from './footer-menu.page';

const routes: Routes = [
  {
    path: '',
    component: FooterMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterMenuPageRoutingModule {}
