import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tous-colis',
  templateUrl: './tous-colis.page.html',
  styleUrls: ['./tous-colis.page.scss'],
})
export class TousColisPage implements OnInit {
  showActive: any='Demande de livraison';
  typeUser: any='';
  constructor(
    private loadingCtrl: LoadingController,
    private nav: NavController,
    private menu: MenuController,
    private modal : ModalController
  ) { }

  ngOnInit() {
    this.typeUser= window.localStorage.getItem('user_type')
  }
  show(e) {
    this.showActive = e
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
  back() {
    this.nav.back()
  }
}
