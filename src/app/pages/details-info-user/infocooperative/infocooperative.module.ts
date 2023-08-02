import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfocooperativePageRoutingModule } from './infocooperative-routing.module';

import { InfocooperativePage } from './infocooperative.page';

import { HeaderPage } from '../../components/header/header.page';

import { HeaderInfoUserPage } from '../../components/header-info-user/header-info-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfocooperativePageRoutingModule
  ],
  declarations: [InfocooperativePage,HeaderPage,HeaderInfoUserPage]
})
export class InfocooperativePageModule {}
