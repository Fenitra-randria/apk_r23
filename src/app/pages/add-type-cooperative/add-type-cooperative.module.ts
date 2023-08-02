import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTypeCooperativePageRoutingModule } from './add-type-cooperative-routing.module';

import { AddTypeCooperativePage } from './add-type-cooperative.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTypeCooperativePageRoutingModule
  ],
  declarations: [AddTypeCooperativePage,HeaderInfoUserPage,HeaderPage]
})
export class AddTypeCooperativePageModule {}
