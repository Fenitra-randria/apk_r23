import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IfVoyageurPageRoutingModule } from './if-voyageur-routing.module';

import { IfVoyageurPage } from './if-voyageur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IfVoyageurPageRoutingModule
  ],
  declarations: [IfVoyageurPage]
})
export class IfVoyageurPageModule {}
