import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuGestionVehiculePageRoutingModule } from './menu-gestion-vehicule-routing.module';

import { MenuGestionVehiculePage } from './menu-gestion-vehicule.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuGestionVehiculePageRoutingModule
  ],
  declarations: [MenuGestionVehiculePage,HeaderInfoUserPage,HeaderPage]
})
export class MenuGestionVehiculePageModule {}
