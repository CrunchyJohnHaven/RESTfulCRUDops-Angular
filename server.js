var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/myAngularApp/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});
// - ng new myAngularApp
// - ng serve
// - ng build --watch

// RUNNING terminal programs 
// sudo mongod 
// mongo 
// ng build --watch (in app folder)
// nodemon server.js 

// ADDING A SERVICE 
// add a service named 'http' within the app folder -> ng g s http/
// within app.module.ts -> 
    // register service named 'http' by adding {import { HttpService } from './http.service'}
    // provides: [HttpService], 
    // import { HttpClientModule } from '@angular/common/http';

// within http.service.ts  ->
//     - import { HttpClient } from '@angular/common/http';
//     -     tempObservable.subscribe(data => console.log('Got our tasks!', data));
//     export class HttpService {
//         constructor(private _http: HttpClient) {
//         this.getTasks();
      
//         }

// within app.component.ts ->
//     - import { HttpService } from './http.service';
//     -   constructor(private _httpService: HttpService) {
//     }
//   }
  