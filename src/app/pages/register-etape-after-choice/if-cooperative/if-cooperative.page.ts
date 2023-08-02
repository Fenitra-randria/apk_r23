import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-if-cooperative',
  templateUrl: './if-cooperative.page.html',
  styleUrls: ['./if-cooperative.page.scss'],
})
export class IfCooperativePage implements OnInit {
  image: any;
  Recto: any;
  Recto1: any;
  Verso: any;
  Verso1: any;
  @ViewChild('slideregister') slides: IonSlides;
  btn_index:number = 0
  statusLoading:any = false
  codeEnvoye:any = false
  formCode: any = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
  }
  
  constructor(
    private loadingCtrl: LoadingController,
    private navController: NavController,
    private toastController: ToastController

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
  ngOnInit() {
  }
  back() {
    this.navController.back()
  }
  otpController(event,next,prev){
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    } 
  }
  envoyeSms() {
    this.statusLoading = true
    setTimeout(() => {
      this.statusLoading = false
      this.codeEnvoye= true
      this.notificationToast('Le code de validation a été envoyée vers 032449043')
    }, 4000);
  }
  valideNum(event,otp1,otp2,otp3,otp4,otp5) {
    if (this.formCode.code1 !=''&&this.formCode.code2 !=''&&this.formCode.code3 !=''&&this.formCode.code4 !=''&&this.formCode.code5 !='') {
      this.loadingCtrl.create({
      spinner: 'bubbles',
      backdropDismiss: false,
      cssClass: 'loadGlobal'
      }).then((res) => {
          res.present();
          setTimeout(() => {
            this.loadingCtrl.dismiss();
            this.notificationToast("Le numero téléphone a été validé")
            this.next()
          }, 500);
      });
    }
    else {
      if (this.formCode.code1 ==='') {
        this.otpController(event,otp1,'')
      }
      if (this.formCode.code2 ==='') {
        this.otpController(event,otp2,otp1)
      }
      if (this.formCode.code3 ==='') {
        this.otpController(event,otp3,otp2)
      }
      if (this.formCode.code4 ==='') {
        this.otpController(event,otp4,otp3)
      }
      if (this.formCode.code5 ==='') {
        this.otpController(event,otp5,otp4)
      }
    }
  }
  async notificationToast(e) {
    return new Promise(async (resolve, reject) => {
        const toast = await this.toastController.create({
            message: e,
            position: 'bottom',
            color: 'dark',
            cssClass:'toastApk',
            duration: 4000

        });
       
        toast.present();
    })
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
  prev() {
    if (this.btn_index > 0) {
      this.slides.lockSwipes(false);
      this.slides.slidePrev();
      this.slides.lockSwipes(true);
    }
    else {
        this.navController.back()
    }
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
  register() {
    this.loadingCtrl.create({
    spinner: 'bubbles',
    backdropDismiss: false,
    cssClass: 'loadGlobal'
    }).then((res) => {
        res.present();
        setTimeout(() => {
          this.loadingCtrl.dismiss();
          this.notificationToast('Votre compte a été crée')
          this.navController.navigateRoot('add-type-cooperative');
        }, 500);
    });
  }
}
