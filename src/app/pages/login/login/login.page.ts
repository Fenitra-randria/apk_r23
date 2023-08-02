import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
  prev() {
    this.navCtrl.back()
  }
  sign() {
    this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: false,
      cssClass: 'loadGlobal'
      }).then((res) => {
          res.present();
          setTimeout(() => {
            this.loadingCtrl.dismiss();
            this.navCtrl.navigateRoot('accueil')
          }, 500);
      });
  }
  forgot() {
    this.navCtrl.navigateRoot('forgot')
  }
}
