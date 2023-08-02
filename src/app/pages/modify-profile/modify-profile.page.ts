import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { ProductZoomPagePage } from '../components/product-zoom-page/product-zoom-page.page';

@Component({
  selector: 'app-modify-profile',
  templateUrl: './modify-profile.page.html',
  styleUrls: ['./modify-profile.page.scss'],
})
export class ModifyProfilePage implements OnInit {
  typeUser: any = 'if_voyageur';
  satusLoading: any = false;
  constructor(
    private loadingCtrl: LoadingController,
    private nav: NavController,
    private modal: ModalController,
    private menu: MenuController,
    private popover: PopoverController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.addTypeUser()
    // this.modal.dismiss();
  }
  async notificationToast() {
    this.toastController.dismiss()
    return new Promise(async (resolve, reject) => {
        const toast = await this.toastController.create({
            message: 'Votre modification a été enregistrer avec succès',
            position: 'bottom',
            color: 'dark',
            cssClass:'toastApk',
            duration: 4000

        });
       
        toast.present();
    })
  }
  async openZoomedImage(img_url){
    
    const modal = await this.modal.create({
      component: ProductZoomPagePage,
      cssClass: 'product-zoom-modal',
      componentProps: {
            imgurl : [img_url]
      },
          presentingElement: await this.modal.getTop()
    })
    await modal.present();
    await modal.onWillDismiss().then((result) => {
      console.log('result :>> ', result);
      
    }).catch((err) => {
      console.log('err :>> ', err);
    });
  }
  valideUpdate() {
    this.satusLoading = true
    setTimeout(() => {
      this.satusLoading = false
      this.notificationToast()
      this.verPage('infocooperative')
    }, 1000);
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
  addTypeUser() {
    this.typeUser = window.localStorage.getItem('user_type')
    console.log("type:",this.typeUser);
  }
} 
