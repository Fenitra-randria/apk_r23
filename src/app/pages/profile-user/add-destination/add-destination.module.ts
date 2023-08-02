import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDestinationPageRoutingModule } from './add-destination-routing.module';

import { AddDestinationPage } from './add-destination.page';

import { HeaderPage } from '../../components/header/header.page';

import { HeaderInfoUserPage } from '../../components/header-info-user/header-info-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDestinationPageRoutingModule
  ],
  declarations: [AddDestinationPage,HeaderPage,HeaderInfoUserPage]
})
export class AddDestinationPageModule {}
