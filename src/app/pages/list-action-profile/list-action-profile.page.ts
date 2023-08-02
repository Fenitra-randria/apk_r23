import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-action-profile',
  templateUrl: './list-action-profile.page.html',
  styleUrls: ['./list-action-profile.page.scss'],
})
export class ListActionProfilePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private loadingCtrl: LoadingController,
    private modal: ModalController
  ) { }

  ngOnInit() {
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

}
