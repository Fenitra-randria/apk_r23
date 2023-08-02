import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-invite-amis',
  templateUrl: './invite-amis.page.html',
  styleUrls: ['./invite-amis.page.scss'],
})
export class InviteAmisPage implements OnInit {
  menuActive: any = 'Demande reçu';

  typeUser:any=''

  constructor(
    private menu: MenuController,
    private nav: NavController,
    private loadingCtrl: LoadingController,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.typeUser=window.localStorage.getItem('user_type')
  }
  changeMenuActive(e) {
    this.menuActive = e
  }
  verDetailChat() {
    this.menuActive = 'detailsChat'
  }
  showMenuClick() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log(this.menu.open('first'),'first');
  }
  showMenuActive(e) {
    this.menuActive = e
  }
  back() {
    this.nav.back()
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
}
