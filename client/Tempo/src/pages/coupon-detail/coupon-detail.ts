import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from "../home/home";

@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon-detail.html'
})
export class CouponDetailPage {

  constructor(private nav:NavController) {
    this.nav = nav;

  }

  use_coupon() {
    console.log("use the coupon.");
  }

}
