import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-product-zoom-page',
  templateUrl: './product-zoom-page.page.html',
  styleUrls: ['./product-zoom-page.page.scss'],
})
export class ProductZoomPagePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    zoom: {
      minRatio: 1,
      maxRatio: 3,
      toggle: true,
      containerClass :'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  };
  images: any = this.navParams.get('imgurl');
  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
  ) {
   }
  ngOnInit() {
    console.log('images:',this.images);
    
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
