import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IfChauffeurPageRoutingModule } from './if-chauffeur-routing.module';

import { IfChauffeurPage } from './if-chauffeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IfChauffeurPageRoutingModule
  ],
  declarations: [IfChauffeurPage]
})
export class IfChauffeurPageModule {}
