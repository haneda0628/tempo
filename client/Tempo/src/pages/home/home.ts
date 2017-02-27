import { Component, ViewChild } from '@angular/core';

import { Platform,MenuController,Nav } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { LinkPage } from '../link/link';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //@ViewChild(Nav) nav: Nav;
  //@ViewChild(Nav) nav: Nav;
  @ViewChild(Nav) nav:Nav;
  rootPage: any = ContactPage;

  pages : Array<{title : string, component : any}>;
  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    //nav.setRoot(ContactPage);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: HomePage },
      { title: 'Page Two', component: LinkPage }
    ];
  }

}
