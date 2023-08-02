import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-discussion',
  templateUrl: './list-discussion.page.html',
  styleUrls: ['./list-discussion.page.scss'],
})
export class ListDiscussionPage implements OnInit {

  menuActive: any = 'message';
  contentMessage: any = [
    {
      typeUser: 'me',
      detailsMessage: 'It was all a dream, I used  to read Word up magazine Salt Pepa and Heavy D up in the limousine  '
    },
    {
      typeUser: 'you',
      detailsMessage: 'Did you ever Hang pictures on your wall'
    },
    {
      typeUser: 'me',
      detailsMessage: 'Yes, I did! Every Saturday! Rap Attack, Mr Magic, Marley Marl. I even let my taperock till my tape popped. Smoking Weed this was way back, when I had the red and lumberjack.  '
    },
    {
      typeUser: 'you',
      detailsMessage: 'Haha, awesome, I think I know the album your looking for'
    },
    {
      typeUser: 'me',
      detailsMessage: 'this is your photo'
    },
    {
      typeUser: 'me',
      detailsMessage: null,
      photos: [
        'https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png',
        'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LrFQ5FGXhdpxiNzODnlINAVAcVJzgUzhLg&usqp=CAU'
      ]
    },
    {
      typeUser: 'you',
      detailsMessage: null,
      photos: [
        'https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png',
        'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LrFQ5FGXhdpxiNzODnlINAVAcVJzgUzhLg&usqp=CAU',
        'https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png',
        'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LrFQ5FGXhdpxiNzODnlINAVAcVJzgUzhLg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LrFQ5FGXhdpxiNzODnlINAVAcVJzgUzhLg&usqp=CAU',
        'https://static.remove.bg/remove-bg-web/f9c9a2813e0321c04d66062f8cca92aedbefced7/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png',
        'https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg',
        'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-LrFQ5FGXhdpxiNzODnlINAVAcVJzgUzhLg&usqp=CAU'
      ]
    }
  ]

  constructor(
    private menu: MenuController,
    private nav: NavController,
    private loadingCtrl:LoadingController,
    private modal : ModalController
  ) { }

  ngOnInit() {
    console.log('contentMessage',this.contentMessage);
    
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
  back() {
    if (this.menuActive==='detailsChat') {
      this.menuActive='message'
    }
    else {
      this.nav.back()
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
}
