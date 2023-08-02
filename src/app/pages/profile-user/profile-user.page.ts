import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {
  image: any;
  
  constructor(
    private navController: NavController
  ) { }

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
  prev() {
    this.navController.back()
  }
}
