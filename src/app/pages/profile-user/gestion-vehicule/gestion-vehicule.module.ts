import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionVehiculePageRoutingModule } from './gestion-vehicule-routing.module';

import { GestionVehiculePage } from './gestion-vehicule.page';

import { HeaderPage } from '../../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionVehiculePageRoutingModule
  ],
  declarations: [GestionVehiculePage,HeaderPage]
})
export class GestionVehiculePageModule {}
