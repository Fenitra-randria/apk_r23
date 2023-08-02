import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-chauffeur-proprietaire-vehicule',
  templateUrl: './list-chauffeur-proprietaire-vehicule.page.html',
  styleUrls: ['./list-chauffeur-proprietaire-vehicule.page.scss'],
})
export class ListChauffeurProprietaireVehiculePage implements OnInit {
  typeUser:any=''
  constructor(
    private navCtrl: NavController,
    private menu: MenuController,
    private loadingCtrl: LoadingController,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.typeUser =  window.localStorage.getItem('user_type')
  }
  reservation() {
    this.navCtrl.navigateRoot('/reservation')
  }
  verProfile() {
    this.navCtrl.navigateRoot('/profile-user/cooperative')
  }
  showMenuClick() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log(this.menu.open('first'),'first');
  }
  verDetailsProfile() {
    this.navCtrl.navigateRoot('/profile-user/cooperative')
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

}
