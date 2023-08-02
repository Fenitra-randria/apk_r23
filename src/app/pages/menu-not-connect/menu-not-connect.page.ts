import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-not-connect',
  templateUrl: './menu-not-connect.page.html',
  styleUrls: ['./menu-not-connect.page.scss'],
})
export class MenuNotConnectPage implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {
  }
  verLogin() {
    this.navController.navigateRoot('/login');
  }
  verRegister() {
    this.navController.navigateRoot('/register');
  }
  prev() {
    this.navController.back()
  }
} 
