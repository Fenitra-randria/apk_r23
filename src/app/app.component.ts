import { Component } from '@angular/core';
import { LoadingController, ModalController, NavController, Platform } from '@ionic/angular';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { LottiePage } from './pages/components/lottie/lottie.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public nav: NavController,
    public platform: Platform,
    private screenOrientation: ScreenOrientation,
    private loadingCtrl: LoadingController,
    private modal: ModalController
  ) 
  {
    this.platform.backButton.subscribeWithPriority(9999, () => {
      document.addEventListener("backbutton", function (event) {
        event.preventDefault(); event.stopPropagation();
      }, false);
      
        this.nav.back()
    });
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.lottieModal()
      setTimeout(() => {
        this.modal.dismiss()
      }, 6000);
    });
  }
  async lottieModal() {
    const modal = await this.modal.create({
      component: LottiePage,
      cssClass: 'lottieCustomize',
      animated: false
    });
    return await modal.present()
  }
}
