import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListActionReservationPageRoutingModule } from './list-action-reservation-routing.module';

import { ListActionReservationPage } from './list-action-reservation.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListActionReservationPageRoutingModule
  ],
  declarations: [ListActionReservationPage,HeaderInfoUserPage,HeaderPage]
})
export class ListActionReservationPageModule {}
