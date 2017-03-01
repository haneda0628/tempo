import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from "../home/home";

@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html'
})
export class CouponPage {

  constructor(private nav:NavController) {
    this.nav = nav;

  }

  move_to_home() {
    console.log("go to home.");
    this.nav.push(HomePage)
  }

}