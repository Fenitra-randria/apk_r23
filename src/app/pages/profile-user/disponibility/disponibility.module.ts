import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisponibilityPageRoutingModule } from './disponibility-routing.module';

import { DisponibilityPage } from './disponibility.page';

import { HeaderPage } from '../../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisponibilityPageRoutingModule
  ],
  declarations: [DisponibilityPage,HeaderPage]
})
export class DisponibilityPageModule {}
