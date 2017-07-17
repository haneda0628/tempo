import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon-detail.html'
})
export class CouponDetailPage {

  coupon = [];

  constructor(private nav:NavController, navParams : NavParams) {
    this.nav = nav;
    this.coupon = navParams.get("coupon");

  }

  use_coupon() {
    console.log("use the coupon.");
  }

}
