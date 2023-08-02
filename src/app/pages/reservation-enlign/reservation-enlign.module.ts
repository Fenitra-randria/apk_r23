import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationEnlignPageRoutingModule } from './reservation-enlign-routing.module';

import { ReservationEnlignPage } from './reservation-enlign.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationEnlignPageRoutingModule
  ],
  declarations: [ReservationEnlignPage,HeaderPage]
})
export class ReservationEnlignPageModule {}
