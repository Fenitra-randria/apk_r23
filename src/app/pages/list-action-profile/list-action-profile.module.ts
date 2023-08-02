import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListActionProfilePageRoutingModule } from './list-action-profile-routing.module';

import { ListActionProfilePage } from './list-action-profile.page';

import { HeaderPage } from '../components/header/header.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListActionProfilePageRoutingModule
  ],
  declarations: [ListActionProfilePage,HeaderPage,HeaderInfoUserPage]
})
export class ListActionProfilePageModule {}
