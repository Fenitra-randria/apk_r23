import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.page.html',
  styleUrls: ['./add-voiture.page.scss'],
})
export class AddVoiturePage implements OnInit {

  destinations:any = [0]
  destinationIndex: any = 1
  satusLoading: any = false

  MyPlace: any = [
    {
      numero: 0,
      statusPlace: 'chauffeur'
    },
    {
      numero: 2,
      statusPlace: 'libre'
    },
    {
      numero: 3,
      statusPlace: 'libre'
    },
    {
      numero: 0,
      statusPlace: 'vide'
    },
    {
      numero: 4,
      statusPlace: 'libre'
    },{
      numero: 5,
      statusPlace: 'libre'
    },
    {
      numero: 0,
      statusPlace: 'vide'
    },
    {
      numero: 6,
      statusPlace: 'libre'
    },
    {
      numero: 7,
      statusPlace: 'libre'
    },
    {
      numero: 8,
      statusPlace: 'libre'
    },
    {
      numero: 0,
      statusPlace: 'vide'
    },
    {
      numero: 9,
      statusPlace: 'libre'
    },
    {
      numero: 10,
      statusPlace: 'libre'
    },
    {
      numero: 11,
      statusPlace: 'libre'
    },
    {
      numero: 0,
      statusPlace: 'vide'
    },
    {
      numero: 12,
      statusPlace: 'libre'
    },
    {
      numero: 13,
      statusPlace: 'libre'
    },
    {
      numero: 14,
      statusPlace: 'libre'
    },
    {
      numero: 15,
      statusPlace: 'libre'
    },
    {
      numero: 16,
      statusPlace: 'libre'
    },
  ];

  constructor(
    public nav : NavController,
    public menu : MenuController,
    public loadingCtrl : LoadingController,
    private modal : ModalController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }
  valideUpdate() {
    this.satusLoading = true
    setTimeout(() => {
      this.satusLoading = false
      this.notificationToast()
      this.verPage('gestion-vehicule')
    }, 4000);
  }
  async notificationToast() {
    // this.toastController.dismiss()
    return new Promise(async (resolve, reject) => {
        const toast = await this.toastController.create({
            message: 'Novelle voiture a été crée',
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
