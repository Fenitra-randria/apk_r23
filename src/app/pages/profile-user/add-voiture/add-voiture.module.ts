import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVoiturePageRoutingModule } from './add-voiture-routing.module';

import { AddVoiturePage } from './add-voiture.page';

import { HeaderPage } from '../../components/header/header.page';

import { HeaderInfoUserPage } from '../../components/header-info-user/header-info-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVoiturePageRoutingModule
  ],
  declarations: [AddVoiturePage,HeaderPage,HeaderInfoUserPage]
})
export class AddVoiturePageModule {}
