import { Component, ViewChild } from '@angular/core';
import { Platform,MenuController,Nav } from 'ionic-angular';

import { PortalPage } from '../portal/portal';
import { StampPage } from '../stamp/stamp';
import { CardPage } from '../card/card';
import { AccessPage } from '../access/access';
import { MessagePage } from '../message/message';
import { SettingsPage } from '../settings/settings';
import { CouponPage } from '../coupon/coupon';
import { NewsPage } from '../news/news';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav:Nav;
  rootPage: any = PortalPage;

  pages : Array<{title : string, component : any}>;
  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    //nav.setRoot(ContactPage);
    //nav.setRoot(HomePage);
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage },
      { title: 'モバイル会員証', component: CardPage },
      { title: 'スタンプ', component: StampPage },
      { title: 'ニュース', component:NewsPage},
      { title: 'クーポン一覧', component:CouponPage},
      { title: 'メッセージ', component:MessagePage},
      { title: 'アクセス', component:AccessPage},
      { title: '設定', component:SettingsPage},
    ];


  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}
