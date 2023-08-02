import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyProfilePageRoutingModule } from './modify-profile-routing.module';

import { ModifyProfilePage } from './modify-profile.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyProfilePageRoutingModule
  ],
  declarations: [ModifyProfilePage,HeaderPage,HeaderInfoUserPage]
})
export class ModifyProfilePageModule {}
