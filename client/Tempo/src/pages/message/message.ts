import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

import * as io from 'socket.io-client';

import { Constants } from '../../app/constants';
import { Headers, RequestOptions, Http} from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
  //queries: {
  //}

})

export class MessagePage {

  @ViewChild(Content) content: Content;

  message : string = "";
  subscription;
  http : Http = null;
  messages = [];

  constructor(public navCtrl: NavController, private ngZone : NgZone, private h : Http ) {
    //var socket = io(Constants.SERVER_URL );
    // socket.on('connect', function(){
    //   console.log('connect');
    //
    // });

    this.http = h;

    this.read();

    this.subscription = setInterval(
      ()=> {
        this.read();
      }, 2000
    );

    //this.content.scrollToBottom();

    //var content = new ViewChild(Content);
    //let dimensions = this.content.getContentDimensions();
    //let itemList = document.getElementById("item-list");
    //let dim = content.
    //itemList.scrollTop = .;

  }

  read() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify({
      "user_id" : 1,
      "member_id" : 1,
      "username": "anounymous",
      "is_received": 1,
      "message_type" : 1
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.http.post( Constants.SERVER_URL + '/api/get_message', body, options)
      .map(res  => res.json())
      .subscribe( data => {
          console.log(data);
          this.messages = data.messages;
        },
        (error : Error) => {
          this.handleError(error);
        }
      );
  }

  send() {
    console.log("送信");
    console.log("go to home.");
    console.log("message :" + this.message);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //let options = new RequestOptions({
    //  headers: headers
    //});
    let body = JSON.stringify({
      "contents" : this.message,
      "user_id" : 1,
      "member_id" : 1,
      "username": "anounymous",
      "is_received": 1,
      "message_type" : 1
    });

    let options = new RequestOptions({
      headers: headers
    });

    console.log(body);

    this.http.post( Constants.SERVER_URL + '/api/send_message', body, options)
      .map(res  => res.json())
      .subscribe( data => {
          this.message = "";
          this.read();
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
