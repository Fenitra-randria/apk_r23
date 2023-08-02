import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductZoomPagePageRoutingModule } from './product-zoom-page-routing.module';

import { ProductZoomPagePage } from './product-zoom-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductZoomPagePageRoutingModule
  ],
  declarations: [ProductZoomPagePage]
})
export class ProductZoomPagePageModule {}
