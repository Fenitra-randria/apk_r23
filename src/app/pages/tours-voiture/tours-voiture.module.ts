import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToursVoiturePageRoutingModule } from './tours-voiture-routing.module';

import { ToursVoiturePage } from './tours-voiture.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToursVoiturePageRoutingModule
  ],
  declarations: [ToursVoiturePage,HeaderInfoUserPage,HeaderPage]
})
export class ToursVoiturePageModule {}
