import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {

  constructor(
    public nav : NavController,
    public menu: MenuController,
    public loadingCtrl : LoadingController,
    private modal: ModalController
  ) { }

  ngOnInit() {
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
            this.nav.navigateRoot(e);
          }, 500);
      });
  }
  showMenuClick() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log(this.menu.open('first'),'first');
  }
  verCooperative() {
    this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: false,
      cssClass: 'loadGlobal'
      }).then((res) => {
          res.present();
          setTimeout(() => {
            this.loadingCtrl.dismiss();
            this.nav.navigateRoot('cooperative')
          }, 500);
      });
  }
  back() {
    this.nav.back()
  }
}
