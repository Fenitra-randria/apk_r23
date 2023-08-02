import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuNotConnectPageRoutingModule } from './menu-not-connect-routing.module';

import { MenuNotConnectPage } from './menu-not-connect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuNotConnectPageRoutingModule
  ],
  declarations: [MenuNotConnectPage]
})
export class MenuNotConnectPageModule {}
