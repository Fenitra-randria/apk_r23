import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservation-enligne-cooperative',
  templateUrl: './reservation-enligne-cooperative.page.html',
  styleUrls: ['./reservation-enligne-cooperative.page.scss'],
})
export class ReservationEnligneCooperativePage implements OnInit {

  contentMessage: any = [
    {
      typeUser: 'me',
      detailsMessage: 'En attente',
      reservationId: 'fsf16f4zf'
    },
    // {
    //   typeUser: 'me',
    //   detailsMessage: "Bonjour,j'envie d'y aller a tamatave aujourd'hui a 18h"
    // },
    // {
    //   typeUser: 'you',
    //   detailsMessage: 'ok,reçu'
    // },
    {
      typeUser: 'me',
      detailsMessage: 'En attente',
      reservationId: 'fsf16f4zf'
    },
    // {
    //   typeUser: 'me',
    //   detailsMessage: "Bonjour,j'envie d'y aller a toliar demain a 18h"
    // },
    // {
    //   typeUser: 'you',
    //   detailsMessage: 'ok,attend'
    // },
  ]

  constructor(
    private menu: MenuController,
    private nav: NavController,
    private loadingCtrl: LoadingController,
    private modal: ModalController
  ) { }

  ngOnInit() {
    console.log('contentMessage',this.contentMessage);
    
  }
  showMenuClick() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
    console.log(this.menu.open('first'),'first');
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
