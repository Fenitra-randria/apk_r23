import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoVoiturePageRoutingModule } from './info-voiture-routing.module';

import { InfoVoiturePage } from './info-voiture.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoVoiturePageRoutingModule
  ],
  declarations: [InfoVoiturePage,HeaderPage]
})
export class InfoVoiturePageModule {}
