import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListChauffeurProprietaireVehiculePageRoutingModule } from './list-chauffeur-proprietaire-vehicule-routing.module';

import { ListChauffeurProprietaireVehiculePage } from './list-chauffeur-proprietaire-vehicule.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListChauffeurProprietaireVehiculePageRoutingModule
  ],
  declarations: [ListChauffeurProprietaireVehiculePage,HeaderInfoUserPage,HeaderPage]
})
export class ListChauffeurProprietaireVehiculePageModule {}
