import { Component } from '@angular/core';
import { Headers, RequestOptions, Http} from '@angular/http';

import { NavController } from 'ionic-angular';

import { NewsDetailPage } from "../news-detail/news-detail";
import { Constants } from '../../app/constants';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  http : Http;
  news = [];
  url :String;

  constructor(public nav: NavController, private h : Http) {
    this.nav = nav;
    this.http = h;
    this.url = Constants.SERVER_URL + '/images/news/'
    this.read();
  }

  /*
  Params : News object
  Description :
    Move to the details of each news.
   */
  move_to_detail(news) {
    console.log("Move to news detail.");
    this.nav.push(NewsDetailPage, {news : news });
  }

  /*
   Description :
   Get news from the server.
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
    this.http.post( Constants.SERVER_URL + '/api/get_news', body, options)
      .map(res  => res.json())
      .subscribe( data => {
          console.log(data);
          //console.log(data[0])
          //this.messages = data.messages;
          this.news = data.news;
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
