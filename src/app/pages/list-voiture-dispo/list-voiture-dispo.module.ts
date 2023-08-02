import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListVoitureDispoPageRoutingModule } from './list-voiture-dispo-routing.module';

import { ListVoitureDispoPage } from './list-voiture-dispo.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListVoitureDispoPageRoutingModule
  ],
  declarations: [ListVoitureDispoPage,HeaderInfoUserPage,HeaderPage]
})
export class ListVoitureDispoPageModule {}
