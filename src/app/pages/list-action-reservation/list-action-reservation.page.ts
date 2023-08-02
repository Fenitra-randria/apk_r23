import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-action-reservation',
  templateUrl: './list-action-reservation.page.html',
  styleUrls: ['./list-action-reservation.page.scss'],
})
export class ListActionReservationPage implements OnInit {
  typeUser: any = 'if_voyageur';
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private loadingCtrl: LoadingController,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.addTypeUser()
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
  addTypeUser() {
    this.typeUser = window.localStorage.getItem('user_type')
    console.log("type:",this.typeUser);
    
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
