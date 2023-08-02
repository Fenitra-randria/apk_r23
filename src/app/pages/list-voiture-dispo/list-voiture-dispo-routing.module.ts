import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVoitureDispoPage } from './list-voiture-dispo.page';

const routes: Routes = [
  {
    path: '',
    component: ListVoitureDispoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListVoitureDispoPageRoutingModule {}
