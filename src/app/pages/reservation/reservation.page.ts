import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, MenuController, ModalController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  image: any;
  Recto: any;
  ProfileClient: any;
  Recto1: any;
  Verso: any;
  Verso1: any;
  MyPlace: any = [
    {
      numero: 0,
      statusPlace: 'chauffeur'
    },
    {
      numero: 2,
      statusPlace: 'reserver'
    },
    {
      numero: 3,
      statusPlace: 'reserver'
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
      statusPlace: 'reserver'
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
      statusPlace: 'EncoursReservation'
    },
    {
      numero: 13,
      statusPlace: 'libre'
    },
    {
      numero: 14,
      statusPlace: 'EncoursReservation'
    },
    {
      numero: 15,
      statusPlace: 'EncoursReservation'
    },
    {
      numero: 16,
      statusPlace: 'reserver'
    },
  ];
  @ViewChild('slideregister') slides: IonSlides;
  btn_index:number = 0
  paiment:any = 0

  constructor(
    private loadingCtrl: LoadingController,
    private navController: NavController,
    private menu: MenuController,
    private toastController: ToastController,
    private modal: ModalController
  ) { }

  slideOptions = {
    on: {
      beforeInit() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true,
        };
        swiper.params = Object.assign(swiper.params, overwriteParams);
        swiper.originalParams = Object.assign(swiper.originalParams, overwriteParams);
      },
      setTranslate() {
        const swiper = this;
        const { $, slides, rtlTranslate: rtl } = swiper;
        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
          const offset$$1 = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = -offset$$1;
          let ty = 0;
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
          $slideEl
            .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
        }
      },
      setTransition(duration) {
        const swiper = this;
        const { slides, activeIndex, $wrapperEl } = swiper;
        slides
          .transition(duration)
          .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
          .transition(duration);
        if (swiper.params.virtualTranslate && duration !== 0) {
          let eventTriggered = false;
          // eslint-disable-next-line
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;

            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
            for (let i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    }
  };
  slideOptions1 = {
    slidesPerView: 5,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
 
  };

  ngOnInit() {
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
  addPlace(e,index) {
     this.MyPlace.forEach(numPlace => {
      if (numPlace.numero === e) {
        if (this.MyPlace[index].statusPlace === 'libre') {
          this.MyPlace[index] = {
            numero: e,
            statusPlace: 'MyPlace'
          }
        }
        else if (this.MyPlace[index].statusPlace === 'MyPlace') {
          this.MyPlace[index] = {
            numero: e,
            statusPlace: 'libre'
          }
        }
      }
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
            this.navController.navigateRoot(e);
          }, 500);
      });
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
  onSelectFilePubProfileClient(event) {
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.ProfileClient = e.target.result;
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
  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }
  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  doCheck() {
    this.slides.getActiveIndex().then(index => {
      this.btn_index = index;
    });
  }
  ValiderReservation() {
    this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: false,
      cssClass: 'loadGlobal'
      }).then((res) => {
          res.present();
          setTimeout(() => {
            this.loadingCtrl.dismiss();
            this.notificationToast();
            this.navController.navigateRoot('accueil');
          }, 500);
      });
  }
  register() {
    this.loadingCtrl.create({
    spinner: 'bubbles',
    backdropDismiss: false,
    cssClass: 'loadGlobal'
    }).then((res) => {
        res.present();
        setTimeout(() => {
          this.loadingCtrl.dismiss();
          this.navController.navigateRoot('/accueil');
        }, 500);
    });
    
  }
  showPaiement(e) {
    this.paiment = e
  }
  async notificationToast() {
    this.toastController.dismiss()
    return new Promise(async (resolve, reject) => {
        const toast = await this.toastController.create({
            message: 'Votre réservation a été envoyée avec succès',
            position: 'bottom',
            color: 'dark',
            cssClass:'toastApk',
            duration: 4000

        });
       
        toast.present();
    })
  }
}
