import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPageRoutingModule } from './notification-routing.module';

import { NotificationPage } from './notification.page';

import { HeaderPage } from '../components/header/header.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationPageRoutingModule
  ],
  declarations: [NotificationPage,HeaderPage,HeaderInfoUserPage]
})
export class NotificationPageModule {}
