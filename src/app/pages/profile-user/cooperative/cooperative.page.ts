import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { PopoverCalendarPage } from '../../popover/popover-calendar/popover-calendar.page';

@Component({
  selector: 'app-cooperative',
  templateUrl: './cooperative.page.html',
  styleUrls: ['./cooperative.page.scss'],
})
export class CooperativePage implements OnInit {

  date_depart:string = ''
  MenuShowBottom: any
  constructor(
    private popoverController: PopoverController,
    private navCtrl: NavController,
    private menu: MenuController,
    private modal: ModalController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
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
  verPage(e) {
    // this.modal.dismiss();
    this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: false,
      cssClass: 'loadGlobal'
      }).then((res) => {
          res.present();
          setTimeout(() => {
            this.loadingCtrl.dismiss();
            this.navCtrl.navigateRoot(e);
          }, 500);
      });
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
    this.navCtrl.navigateRoot('/infocooperative')
  }
  verChat() {
    this.navCtrl.navigateRoot('/list-discussion')
  }
  showMenuFooter(e) {
    this.MenuShowBottom = e
    document.getElementById('open-modalcooperative').click()
  }
  statusDismis()
  {
    this.modal.dismiss()
  }
}
