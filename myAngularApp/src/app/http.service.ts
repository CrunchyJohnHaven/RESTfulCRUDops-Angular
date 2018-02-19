// getTasks(){} -> makes an http request
// make http request ->

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  // this.getTasks(); -> no longer want the service itself to invoke its function, have the component do that

  }

  getTasks() {

    // const tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log('Got our tasks!', data));
    return this._http.get('/tasks'); // -> deliver to whoever asks for it
  }
}
