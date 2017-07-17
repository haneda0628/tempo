import { Component } from '@angular/core';
import { Headers, RequestOptions, Http} from '@angular/http';

import { NavController } from 'ionic-angular';

import { CouponDetailPage} from "../coupon-detail/coupon-detail";
import { Constants } from '../../app/constants';

@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html'
})
export class CouponPage {

  http : Http;
  coupons = [];

  constructor(private nav:NavController, private h : Http) {
    this.nav = nav;
    this.http = h;
    this.read();
  }

  move_to_coupon_detail(coupon) {
    console.log("go to coupon detail. coupon : " + coupon);
    this.nav.push(CouponDetailPage, {coupon : coupon});
  }


  /*
   Description :
   Get coupons from the server.
   */
  read() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify({
      "member_id" : 1,
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.http.post( Constants.SERVER_URL + '/api/get_coupons', body, options)
      .map(res  => res.json())
      .subscribe( data => {
          console.log(data);
          //console.log(data[0])
          //this.messages = data.messages;
          this.coupons = data.coupons;
        },
        (error : Error) => {
          this.handleError(error);
        }
      );
  }

  /*
   Args :
   error : error from json data.
   Description :
   Handling error and show error messages.
   */
  handleError(error) {
    console.log(error);
    return error.json().message || 'Server error, please try again later';
  }

}
