import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverCalendarPage } from './popover-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: PopoverCalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoverCalendarPageRoutingModule {}
