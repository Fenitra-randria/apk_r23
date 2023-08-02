import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDiscussionPage } from './list-discussion.page';

const routes: Routes = [
  {
    path: '',
    component: ListDiscussionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDiscussionPageRoutingModule {}
