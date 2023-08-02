import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionInvitationPageRoutingModule } from './action-invitation-routing.module';

import { ActionInvitationPage } from './action-invitation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionInvitationPageRoutingModule
  ],
  declarations: [ActionInvitationPage]
})
export class ActionInvitationPageModule {}
