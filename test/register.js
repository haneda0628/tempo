'use strict'
var util = require('util');

const http = require('http');
const HOST = `localhost`;
const PORT = 8888;
const PATH = `/cakephp/members/register`;

let postData = {
    "username": "haneda3",
    "password": "haneda",
    "firstname":"貴俊",
    "lastname":"羽田",
    "address":"東京都",
    "phonenum1":"08033570546",
    "phonenum2":"08033570546",
    "email1":"m52025.xof@gmail.com",
    "email2":"m52025.xof@gmail.com",
    "role":"test",
    "created":new Date(),
    "modified":new Date()
};

let postDataStr = JSON.stringify(postData);
// let options = {
//     host: HOST,
//     port: PORT,
//     path: PATH,
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Content-Length': postDataStr.length
//     },
//     form: postData
// };

let options = {
  uri : "http://localhost:8888" + PATH,
  headers : {
        "Content-type": "application/x-www-form-urlencoded",
  },
  form : postData
};

var request = require('request');
request.post(options, function(error, response, body){
  console.log('STATUS: ' + response.statusCode);
  console.log('body: ' + body);
});

// request.post(options, function(err, res, body) {
//   console.log(util.inspect(res));
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   console.log('BODY: ' + body);
// });
// 
// let req = http.request(options, (res) => {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', (chunk) => {
//     console.log('BODY: ' + chunk);
//   });
// });
// req.on('error', (e) => {
//   console.log('problem with request: ' + e.message);
// });
// req.write(postDataStr);
// req.end();
// 
