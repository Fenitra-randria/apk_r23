import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-info-user',
  templateUrl: './header-info-user.page.html',
  styleUrls: ['./header-info-user.page.scss'],
})
export class HeaderInfoUserPage implements OnInit {
@Input() pageActive:any='R23';
  typeUser: any = 'if_voyageur';
  modalGlobale:any = false;
  typeModal: any = '';

  constructor(
    public nav: NavController,
    public loadingCtrl : LoadingController,
    private modal: ModalController,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.addTypeUser()
    this.watchIfChauffeur()
  }
  showModal(e) {
    this.typeModal = e
    this.modalGlobale = true
  }
  verPage(e) {
    // this.modal.dismiss()
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
  watchIfChauffeur() {
    if (this.pageActive === 'Chauffeur') {
      this.typeUser = 'if-voyageur'
    }
  }
  dismissModal() {
    this.modal.dismiss()
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
  showmodaldisconnect() {
    this.modal.dismiss()
  }
}
