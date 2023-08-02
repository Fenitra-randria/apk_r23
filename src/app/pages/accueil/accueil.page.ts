import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { ProductZoomPagePage } from '../components/product-zoom-page/product-zoom-page.page';
import { PopoverCalendarPage } from '../popover/popover-calendar/popover-calendar.page';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  date_depart:string = ''
  MenuShowBottom:string = ''
  typeUser:any=''
  
  constructor(
    private popoverController: PopoverController,
    private navCtrl: NavController,
    private menu: MenuController,
    public modal: ModalController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.typeUser=window.localStorage.getItem('user_type')
  }
  async addDate(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverCalendarPage,
      cssClass: 'popover-calendar',
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  reservation() {
    this.navCtrl.navigateRoot('reservation')
  }
  verProfile() {
    this.navCtrl.navigateRoot('cooperative')
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
  showMenuClick() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log(this.menu.open('first'),'first');
    
    
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
  verCooperative() {
    this.navCtrl.navigateRoot('cooperative')
  }
  showMenuFooter(e) {
    this.MenuShowBottom = e
    document.getElementById('open-modalaccueil').click()
  }
  statusDismis()
  {
    this.modal.dismiss()
  }
}
