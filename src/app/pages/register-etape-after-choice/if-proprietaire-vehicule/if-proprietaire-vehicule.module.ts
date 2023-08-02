import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IfProprietaireVehiculePageRoutingModule } from './if-proprietaire-vehicule-routing.module';

import { IfProprietaireVehiculePage } from './if-proprietaire-vehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IfProprietaireVehiculePageRoutingModule
  ],
  declarations: [IfProprietaireVehiculePage]
})
export class IfProprietaireVehiculePageModule {}
