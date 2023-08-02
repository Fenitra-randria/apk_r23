import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrePageRoutingModule } from './parametre-routing.module';

import { ParametrePage } from './parametre.page';

import { HeaderPage } from '../components/header/header.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrePageRoutingModule
  ],
  declarations: [ParametrePage,HeaderPage,HeaderInfoUserPage]
})
export class ParametrePageModule {}
