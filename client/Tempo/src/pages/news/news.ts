import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { NewsDetailPage } from "../news-detail/news-detail";

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  constructor(public nav: NavController) {
    this.nav = nav;
  }

  move_to_detail() {
    console.log("go to home.");
    this.nav.push(NewsDetailPage)
  }


}
