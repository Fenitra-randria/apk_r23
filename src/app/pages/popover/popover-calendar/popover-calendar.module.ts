import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverCalendarPageRoutingModule } from './popover-calendar-routing.module';

import { PopoverCalendarPage } from './popover-calendar.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverCalendarPageRoutingModule,
    CalendarModule
  ],
  declarations: [PopoverCalendarPage]
})
export class PopoverCalendarPageModule {}
