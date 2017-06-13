import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { StampPage } from '../stamp/stamp';
import { CardPage } from '../card/card';
import { AccessPage } from '../access/access';
import { MessagePage } from '../message/message';
import { Constants } from '../../app/constants';
import { CouponPage } from '../coupon/coupon';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-portal',
  templateUrl: 'portal.html'
})
export class PortalPage {
  slides:any[];

  constructor(public nav: NavController) {
    this.nav = nav;
    this.slides = [
      Constants.SERVER_URL + '/app/webroot/images/slide/image1.jpg',
      Constants.SERVER_URL + '/app/webroot/images/slide/image2.jpg',
      Constants.SERVER_URL + '/app/webroot/images/slide/image3.jpg'
    ];
  }

  call() {
    console.log("call.");
    location.href = 'tel:08033570546';

    //this.nav.push(HomePage)
  }

  go_to_news() {
    console.log("news.");
    this.nav.push(NewsPage);
    //location.href = 'mailto:m52025.xof@gmail.com?subject=test';
  }

  go_to_shopping() {
    console.log("news.");
  }

  consult_by_email() {
    console.log("email.");
    location.href = 'mailto:m52025.xof@gmail.com?subject=test';

  }

  go_to_coupon() {
    console.log("coupon.");
    this.nav.push(CouponPage);

  }

  show_special_goods() {
    console.log("goods.");
    location.href = 'http://';

  }

}
