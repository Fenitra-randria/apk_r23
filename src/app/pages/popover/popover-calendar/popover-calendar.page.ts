import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-calendar',
  templateUrl: './popover-calendar.page.html',
  styleUrls: ['./popover-calendar.page.scss'],
})
export class PopoverCalendarPage implements OnInit {
  date: string;
  type: 'string'; 

  constructor(
    private popCtrl: PopoverController
  ) { }

  onChange($event) {
    console.log($event);
    this.popCtrl.dismiss();
  }

  ngOnInit() {
  }
}
