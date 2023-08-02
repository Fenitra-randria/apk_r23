import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IfCooperativePageRoutingModule } from './if-cooperative-routing.module';

import { IfCooperativePage } from './if-cooperative.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IfCooperativePageRoutingModule
  ],
  declarations: [IfCooperativePage]
})
export class IfCooperativePageModule {}
