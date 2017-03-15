import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { PortalPage } from '../pages/portal/portal';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { LinkPage } from '../pages/link/link';
import { SignUpPage } from '../pages/signup/signup';
import { StampPage } from '../pages/stamp/stamp';
import { CardPage } from '../pages/card/card';
import { AccessPage } from '../pages/access/access';
import { MessagePage } from '../pages/message/message';
import { SettingsPage } from '../pages/settings/settings';
import { CouponPage } from '../pages/coupon/coupon';
import { CouponDetailPage } from '../pages/coupon-detail/coupon-detail';
import { NewsPage } from '../pages/news/news';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    PortalPage,
    HomePage,
    TabsPage,
    StartPage,
    LinkPage,
    SignUpPage,
    CardPage,
    StampPage,
    AccessPage,
    MessagePage,
    SettingsPage,
    CouponPage,
    CouponDetailPage,
    NewsPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PortalPage,
    HomePage,
    TabsPage,
    StartPage,
    LinkPage,
    SignUpPage,
    CardPage,
    StampPage,
    AccessPage,
    MessagePage,
    SettingsPage,
    CouponPage,
    CouponDetailPage,
    NewsPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
