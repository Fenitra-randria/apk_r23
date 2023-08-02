import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user_type:string = 'vibreur'
  btn_index:number = 0

  constructor(
    public navController: NavController,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

  valideChoix() {
    if (this.user_type != 'vibreur') {
      this.loadingCtrl.create({
        spinner: 'bubbles',
        backdropDismiss: false,
        cssClass: 'loadGlobal'
        }).then((res) => {
            res.present();
            setTimeout(() => {
              this.loadingCtrl.dismiss();
              this.navController.navigateRoot(this.user_type);
              this.pushTypeUser()
            }, 500);
        });
    }
  }
  prev() {
    this.navController.back()
  }
  pushTypeUser() {
    window.localStorage.setItem('user_type', this.user_type);
  }
}
