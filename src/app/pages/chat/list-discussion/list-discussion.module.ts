import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDiscussionPageRoutingModule } from './list-discussion-routing.module';

import { ListDiscussionPage } from './list-discussion.page';
import { HeaderPage } from '../../components/header/header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDiscussionPageRoutingModule
  ],
  declarations: [ListDiscussionPage,HeaderPage]
})
export class ListDiscussionPageModule {}
