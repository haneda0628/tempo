import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Constants } from '../../app/constants';
import { HomePage } from "../home/home";

import { Headers, RequestOptions, Http} from '@angular/http';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-link',
  templateUrl: 'link.html'
})
export class LinkPage {
  http : Http = null;
  storage : Storage = null;
  email = "";
  password = "";
  tel = "";


  constructor(private nav:NavController, http:Http, public strg:Storage) {
    this.nav = nav;
    this.http = http;
    this.storage = strg;

  }

  move_to_home() {
    console.log("go to home.");
    this.nav.push(HomePage)
  }

  link_to_site() {
    console.log('link to site.');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //let options = new RequestOptions({
    //  headers: headers
    //});
    let body = JSON.stringify({
      "email1": this.email,
      "password": this.password,
      "username": this.email,
      "phonenum1": this.tel,
      "role": 'Member',
    });

    let options = new RequestOptions({
      headers: headers
    });

    console.log(body);

    this.http.post(Constants.SERVER_URL + '/api/login', body, options)
      .map(res => res.json())
      .subscribe(data => {

        if(data.code == 1) {
          console.log(data);
          this.storage.set('password', this.password);
          this.storage.set('username', this.email);

          this.nav.push(HomePage);
        }
      },
        (error: Error) => {
          this.handleError(error);
      })

  }


  handleError(error) {
    console.log(error);
    return error.json().message || 'Server error, please try again later';
  }

}
