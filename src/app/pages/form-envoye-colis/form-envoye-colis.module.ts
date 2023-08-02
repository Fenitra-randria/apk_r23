import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEnvoyeColisPageRoutingModule } from './form-envoye-colis-routing.module';

import { FormEnvoyeColisPage } from './form-envoye-colis.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormEnvoyeColisPageRoutingModule,
    CalendarModule
  ],
  declarations: [FormEnvoyeColisPage,HeaderInfoUserPage,HeaderPage]
})
export class FormEnvoyeColisPageModule {}
