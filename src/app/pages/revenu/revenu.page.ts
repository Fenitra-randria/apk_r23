import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-revenu',
  templateUrl: './revenu.page.html',
  styleUrls: ['./revenu.page.scss'],
})
export class RevenuPage implements OnInit {

  date_depart:string = ''
  date_fin:string = ''
  type: 'string';
  constructor(
    public popoverController: PopoverController,
    public navCtrl: NavController,
    public menu: MenuController,
    public loadingCtrl : LoadingController,
    private modal : ModalController
  ) { }

  ngOnInit() {
  }

  reservation() {
    this.navCtrl.navigateRoot('/reservation')
  }
  dismissMenu() {
    this.modal.dismiss()
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
