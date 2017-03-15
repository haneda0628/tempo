import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CouponDetailPage} from "../coupon-detail/coupon-detail";

@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html'
})
export class CouponPage {

  constructor(private nav:NavController) {
    this.nav = nav;

  }

  move_to_coupon_detail() {
    console.log("go to home.");
    this.nav.push(CouponDetailPage)
  }

}
