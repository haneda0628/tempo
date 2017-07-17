import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Headers, RequestOptions, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Constants } from '../../app/constants';
import { HomePage } from "../home/home";

//const SERVER_URL = 'http://localhost:8888/cakephp';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {

  monthList = [];
  yearList = [];
  dayList = [];

  firstname : string = "";
  lastname : string = "";
  gender : string = "";
  address : string = "";
  email : string = "";
  tel : string = "";
  password : string = "";

  year : number = 1980;
  month : number = 6;
  day : number = 30;

  http : Http = null;
  storage : Storage = null;

  constructor(private nav:NavController, http:Http, public strg : Storage) {
    this.nav = nav;
    this.http = http;
    this.storage = strg;

    for(let i = 1900 ; i <= 2017 ; i++) {
      this.yearList.push(i);
    }

    for(let i = 1 ; i <= 12 ; i++) {
      this.monthList.push(i);
    }

    this.update_day_list();
  }

  update_day_list() {
    let len:number = new Date(this.year, this.month, 0).getDate();
    console.log('day length : ' + len);
    this.dayList = [];
    for(let i = 1 ; i <= len ; i++) {
      this.dayList.push(i);
    }
  }

  register() {
    console.log("go to home.");

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //let options = new RequestOptions({
    //  headers: headers
    //});
    let body = JSON.stringify({

      "username": this.email,
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email1": this.email,
      "password": this.password,
      "phonenum1" : this.tel,
      "role" : 'Member',

    });

    let options = new RequestOptions({
      headers: headers
    });

    console.log(body);


    this.http.post( Constants.SERVER_URL + '/api/register', body, options)
      .map(res  => res.json())
      .subscribe( data => {

          console.log(data);
          this.storage.set('password', this.password);
          this.storage.set('username', this.email);

          this.nav.push(HomePage);
      },
      (error : Error) => {
        this.handleError(error);
      }
    )
  }

  handleError(error) {
    console.log(error);
    return error.json().message || 'Server error, please try again later';
  }
}
