import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-portal',
  templateUrl: 'portal.html'
})
export class PortalPage {

  constructor(public navCtrl: NavController) {

  }

  call() {
    console.log("call.");
    location.href = 'tel:08033570546';

    //this.nav.push(HomePage)
  }

  go_to_news() {
    console.log("news.");
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
  }

  show_special_goods() {
    console.log("goods.");
  }

}
