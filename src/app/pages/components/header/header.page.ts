import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  typeUser: any = 'if_voyageur';

  modalDeconnect: any;

  constructor(
    public menu: MenuController,
    public nav: NavController,
    public loadingCtrl: LoadingController,
    public modal : ModalController
  ) { }

  ngOnInit() {
    this.addTypeUser()
  }
  hideMenu() {
    this.menu.close()
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
  showmodaldisconnect() {
    this.modalDeconnect = !this.modalDeconnect
  }
  addTypeUser() {
    this.typeUser = window.localStorage.getItem('user_type')
    console.log("type:",this.typeUser);
    
  }
  deconnect(e) {
    this.modalDeconnect = false
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
}
