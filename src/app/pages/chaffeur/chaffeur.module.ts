import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaffeurPageRoutingModule } from './chaffeur-routing.module';

import { ChaffeurPage } from './chaffeur.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaffeurPageRoutingModule
  ],
  declarations: [ChaffeurPage,HeaderInfoUserPage,HeaderPage]
})
export class ChaffeurPageModule {}
