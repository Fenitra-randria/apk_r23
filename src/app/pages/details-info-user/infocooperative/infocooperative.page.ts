import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, PopoverController } from '@ionic/angular';
import { PopoverCalendarPage } from '../../popover/popover-calendar/popover-calendar.page';

@Component({
  selector: 'app-infocooperative',
  templateUrl: './infocooperative.page.html',
  styleUrls: ['./infocooperative.page.scss'],
})
export class InfocooperativePage implements OnInit {

  date_depart:string = ''
  typeUser:any=''
  constructor(
    private popoverController: PopoverController,
    private navCtrl: NavController,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.typeUser =  window.localStorage.getItem('user_type')
  }

  async addDate(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverCalendarPage,
      cssClass: 'popover-calendar',
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  reservation() {
    this.navCtrl.navigateRoot('/reservation')
  }
  verProfile() {
    this.navCtrl.navigateRoot('/profile-user/cooperative')
  }
  showMenuClick() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log(this.menu.open('first'),'first');
  }
  verDetailsProfile() {
    this.navCtrl.navigateRoot('/profile-user/cooperative')
  }
  verPage(e) {
    this.navCtrl.navigateRoot(e)
  }
}
