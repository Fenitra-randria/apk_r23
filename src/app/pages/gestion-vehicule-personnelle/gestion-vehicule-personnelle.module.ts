import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionVehiculePersonnellePageRoutingModule } from './gestion-vehicule-personnelle-routing.module';

import { GestionVehiculePersonnellePage } from './gestion-vehicule-personnelle.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionVehiculePersonnellePageRoutingModule
  ],
  declarations: [GestionVehiculePersonnellePage,HeaderInfoUserPage,HeaderPage]
})
export class GestionVehiculePersonnellePageModule {}
