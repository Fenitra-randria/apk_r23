import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.page.html',
  styleUrls: ['./footer-menu.page.scss'],
})
export class FooterMenuPage implements OnInit {
  @Input() MenuShowBottom:any;
  @Input() pageActive:any;
  @Output() statusDismis = new EventEmitter();
  date: string;
  type: 'string'; 
  
  constructor() { }

  ngOnInit() {
  }
  dismissMenu() {
    this.statusDismis.emit('dismiss');
  }
}
