import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {
  typeUser:any=''
  constructor(
    private loadingCtrl:LoadingController,
    private navCtrl:NavController,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.typeUser = window.localStorage.getItem('user_type')
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
  showMenuClick() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log(this.menu.open('first'),'first');
  }
}
