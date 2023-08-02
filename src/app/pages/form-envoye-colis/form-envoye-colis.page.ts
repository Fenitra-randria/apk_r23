import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-envoye-colis',
  templateUrl: './form-envoye-colis.page.html',
  styleUrls: ['./form-envoye-colis.page.scss'],
})
export class FormEnvoyeColisPage implements OnInit {
  Recto: any;
  image: any;
  Verso: any;
  constructor(
    private menu: MenuController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  onSelectFilePubRecto(event) {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.Recto = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
  onSelectFilePubVerso(event) {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.Verso = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
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
}
