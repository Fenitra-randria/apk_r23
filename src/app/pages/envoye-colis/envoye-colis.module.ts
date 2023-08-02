import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvoyeColisPageRoutingModule } from './envoye-colis-routing.module';

import { EnvoyeColisPage } from './envoye-colis.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvoyeColisPageRoutingModule
  ],
  declarations: [EnvoyeColisPage,HeaderInfoUserPage,HeaderPage]
})
export class EnvoyeColisPageModule {}
