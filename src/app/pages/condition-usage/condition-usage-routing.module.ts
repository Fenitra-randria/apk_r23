import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionUsagePage } from './condition-usage.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionUsagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionUsagePageRoutingModule {}
