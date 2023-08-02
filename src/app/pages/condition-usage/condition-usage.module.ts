import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionUsagePageRoutingModule } from './condition-usage-routing.module';

import { ConditionUsagePage } from './condition-usage.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionUsagePageRoutingModule
  ],
  declarations: [ConditionUsagePage,HeaderInfoUserPage,HeaderPage]
})
export class ConditionUsagePageModule {}
