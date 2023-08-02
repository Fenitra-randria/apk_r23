import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinationPageRoutingModule } from './destination-routing.module';

import { DestinationPage } from './destination.page';

import { HeaderPage } from '../../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinationPageRoutingModule
  ],
  declarations: [DestinationPage,HeaderPage]
})
export class DestinationPageModule {}
