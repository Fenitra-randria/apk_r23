import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTypeCooperativePage } from './add-type-cooperative.page';

const routes: Routes = [
  {
    path: '',
    component: AddTypeCooperativePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTypeCooperativePageRoutingModule {}
