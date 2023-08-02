import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevenuPageRoutingModule } from './revenu-routing.module';

import { RevenuPage } from './revenu.page';

import { HeaderPage } from '../components/header/header.page';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevenuPageRoutingModule,
    CalendarModule
  ],
  declarations: [RevenuPage,HeaderPage]
})
export class RevenuPageModule {}
