import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TousColisPageRoutingModule } from './tous-colis-routing.module';

import { TousColisPage } from './tous-colis.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TousColisPageRoutingModule
  ],
  declarations: [TousColisPage,HeaderPage]
})
export class TousColisPageModule {}
