import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CooperativePageRoutingModule } from './cooperative-routing.module';

import { CooperativePage } from './cooperative.page';

import { HeaderPage } from '../../components/header/header.page';

import { HeaderInfoUserPage } from '../../components/header-info-user/header-info-user.page';

import { CalendarModule } from 'ion2-calendar';

import { FooterMenuPage } from '../../components/footer-menu/footer-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CooperativePageRoutingModule,
    CalendarModule
  ],
  declarations: [CooperativePage,HeaderPage,HeaderInfoUserPage,FooterMenuPage]
})
export class CooperativePageModule {}
