import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LinkPage } from '../pages/link/link';
import { SignUpPage } from '../pages/signup/signup';

//import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = StartPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: HomePage },
      { title: 'Page Two', component: LinkPage }
    ];

  }

}
