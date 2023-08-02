import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductZoomPagePage } from './product-zoom-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProductZoomPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductZoomPagePageRoutingModule {}
