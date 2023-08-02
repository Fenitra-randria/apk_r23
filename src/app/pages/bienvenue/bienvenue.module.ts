import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BienvenuePageRoutingModule } from './bienvenue-routing.module';

import { BienvenuePage } from './bienvenue.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BienvenuePageRoutingModule
  ],
  declarations: [BienvenuePage,HeaderInfoUserPage,HeaderPage]
})
export class BienvenuePageModule {}
