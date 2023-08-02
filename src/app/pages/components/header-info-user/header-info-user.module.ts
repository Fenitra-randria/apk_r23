import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderInfoUserPageRoutingModule } from './header-info-user-routing.module';

import { HeaderInfoUserPage } from './header-info-user.page';

import { GlobaleModalePage } from '../globale-modale/globale-modale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderInfoUserPageRoutingModule
  ],
  declarations: [HeaderInfoUserPage,GlobaleModalePage]
})
export class HeaderInfoUserPageModule {}
