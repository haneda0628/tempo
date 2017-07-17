import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import { Constants } from '../../app/constants';

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailPage {
  url :String;
  news = [];

  constructor(public nav: NavController, navParams : NavParams) {
    this.url = Constants.SERVER_URL + '/images/news/'

    this.news = navParams.get("news");

  }

}
