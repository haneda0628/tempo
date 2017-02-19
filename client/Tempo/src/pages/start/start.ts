import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LinkPage } from '../link/link';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(private nav:NavController) {
    this.nav = nav;
  }

  move_to_ec() {
    this.nav.push(LinkPage);
  }

  move_to_singup() {
    this.nav.push(SignUpPage);
  }
}
