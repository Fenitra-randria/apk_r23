import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-voiture',
  templateUrl: './info-voiture.page.html',
  styleUrls: ['./info-voiture.page.scss'],
})
export class InfoVoiturePage implements OnInit {

  menuActive: any = 'Liste des véhicules';

  typeUser:any=''

  image: any;
  Recto: any;
  Recto1: any;
  Verso: any;
  Verso1: any;

  constructor(
    private menu: MenuController,
    private nav: NavController,
    private loadingCtrl: LoadingController,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.typeUser=window.localStorage.getItem('user_type')
  }
  dismissMenu() {
    this.modal.dismiss()
  }
  changeMenuActive(e) {
    this.menuActive = e
    this.dismissMenu()
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
    this.dismissMenu()
  }
  back() {
    if (this.menuActive==='Liste des véhicules') {
      this.nav.back() 
    }
    else {
      this.menuActive='Liste des véhicules'
    }
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
  onSelectFilePub(event) {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
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
  onSelectFilePubRecto1(event) {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.Recto1 = e.target.result;
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
  onSelectFilePubVerso1(event) {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.Verso1 = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }

}
