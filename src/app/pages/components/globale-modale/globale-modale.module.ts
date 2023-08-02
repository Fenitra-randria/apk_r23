import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobaleModalePageRoutingModule } from './globale-modale-routing.module';

import { GlobaleModalePage } from './globale-modale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobaleModalePageRoutingModule
  ],
  declarations: [GlobaleModalePage]
})
export class GlobaleModalePageModule {}
