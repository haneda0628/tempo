import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailPage {

  constructor(public nav: NavController) {
    this.nav = nav;
  }

  move_to_news_detail() {
  }

}
