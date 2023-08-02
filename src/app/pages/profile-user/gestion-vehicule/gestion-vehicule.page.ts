import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { PopoverCalendarPage } from '../../popover/popover-calendar/popover-calendar.page';

@Component({
  selector: 'app-gestion-vehicule',
  templateUrl: './gestion-vehicule.page.html',
  styleUrls: ['./gestion-vehicule.page.scss'],
})
export class GestionVehiculePage implements OnInit {
  date_depart:string = ''
  constructor(
    public popoverController: PopoverController,
    public navCtrl: NavController,
    public menu: MenuController,
    public loadingCtrl : LoadingController,
    private modal : ModalController
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

  reservation() {
    this.navCtrl.navigateRoot('/reservation')
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
  back() {
    this.navCtrl.back()
  }
  verProfile() {
    this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: false,
      cssClass: 'loadGlobal'
      }).then((res) => {
          res.present();
          setTimeout(() => {
            this.loadingCtrl.dismiss();
            this.navCtrl.navigateRoot('cooperative')
          }, 500);
      });
  }
}

