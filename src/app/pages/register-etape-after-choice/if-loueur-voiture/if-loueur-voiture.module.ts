import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IfLoueurVoiturePageRoutingModule } from './if-loueur-voiture-routing.module';

import { IfLoueurVoiturePage } from './if-loueur-voiture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IfLoueurVoiturePageRoutingModule
  ],
  declarations: [IfLoueurVoiturePage]
})
export class IfLoueurVoiturePageModule {}
