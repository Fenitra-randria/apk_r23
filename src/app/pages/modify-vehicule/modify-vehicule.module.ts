import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyVehiculePageRoutingModule } from './modify-vehicule-routing.module';

import { ModifyVehiculePage } from './modify-vehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyVehiculePageRoutingModule
  ],
  declarations: [ModifyVehiculePage]
})
export class ModifyVehiculePageModule {}
