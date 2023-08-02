import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationEnligneCooperativePageRoutingModule } from './reservation-enligne-cooperative-routing.module';

import { ReservationEnligneCooperativePage } from './reservation-enligne-cooperative.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationEnligneCooperativePageRoutingModule
  ],
  declarations: [ReservationEnligneCooperativePage,HeaderPage]
})
export class ReservationEnligneCooperativePageModule {}
