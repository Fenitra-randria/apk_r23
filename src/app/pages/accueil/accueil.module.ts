import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilPageRoutingModule } from './accueil-routing.module';

import { AccueilPage } from './accueil.page';

import { CalendarModule } from 'ion2-calendar';

import { HeaderPage } from '../components/header/header.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { FooterMenuPage } from '../components/footer-menu/footer-menu.page';

import { GlobaleModalePage } from '../components/globale-modale/globale-modale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilPageRoutingModule,
    CalendarModule
  ],
  declarations: [AccueilPage,HeaderPage,HeaderInfoUserPage,FooterMenuPage,GlobaleModalePage]
})
export class AccueilPageModule {}
