import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';

import { HeaderPage } from '../components/header/header.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPageRoutingModule
  ],
  declarations: [ReservationPage,HeaderPage,HeaderInfoUserPage]
})
export class ReservationPageModule {}
