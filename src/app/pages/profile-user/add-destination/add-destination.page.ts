import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-destination',
  templateUrl: './add-destination.page.html',
  styleUrls: ['./add-destination.page.scss'],
})
export class AddDestinationPage implements OnInit {

  destinations:any = []
  destinationIndex: any = 0
  satusLoading: any = false

  constructor(
    public nav : NavController,
    public menu : MenuController,
    public loadingCtrl : LoadingController,
    private modal: ModalController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    // this.modal.dismiss();
  }
  valideUpdate() {
    this.satusLoading = true
    setTimeout(() => {
      this.satusLoading = false
      this.notificationToast()
      this.verPage('add-voiture')
    }, 4000);
  }
  async notificationToast() {
    return new Promise(async (resolve, reject) => {
        const toast = await this.toastController.create({
            message: 'Novelle destination a été créee',
            position: 'bottom',
            color: 'dark',
            cssClass:'toastApk',
            duration: 4000

        });
       
        toast.present();
    })
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
  incrementDestination() {
    this.destinationIndex++
    this.destinations.push(this.destinationIndex)
    
  }
  decrementDestination() {
    this.destinationIndex--
    this.destinations.splice(this.destinationIndex, 1);
  }
}
