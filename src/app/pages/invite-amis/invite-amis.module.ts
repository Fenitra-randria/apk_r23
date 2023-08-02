import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteAmisPageRoutingModule } from './invite-amis-routing.module';

import { InviteAmisPage } from './invite-amis.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviteAmisPageRoutingModule
  ],
  declarations: [InviteAmisPage,HeaderPage]
})
export class InviteAmisPageModule {}
