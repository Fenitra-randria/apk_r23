import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegleConfidentialityPageRoutingModule } from './regle-confidentiality-routing.module';

import { RegleConfidentialityPage } from './regle-confidentiality.page';

import { HeaderInfoUserPage } from '../components/header-info-user/header-info-user.page';

import { HeaderPage } from '../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegleConfidentialityPageRoutingModule
  ],
  declarations: [RegleConfidentialityPage,HeaderInfoUserPage,HeaderPage]
})
export class RegleConfidentialityPageModule {}
