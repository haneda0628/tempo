import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from "../home/home";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {

  constructor(private nav:NavController) {
    this.nav = nav;
  }


  move_to_home() {
    this.nav.push(HomePage);
  }
}
