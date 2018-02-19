// _httpService -> talking about http.service.ts injection
// getTasksFromService -> invoke the service (_httpService: all the methods and attributes in the service)
  // - this._httpService.getTasks() - invocation of the functions in http.service.ts (returns observable) -> the call = observable
    // - have the component subscribe to the observable -> pass the data to the component by passing the observable to
      // the app.component.html (subscribe -> this.tasks=data)

import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app'; // ts file controlling the logic producing html
  tasks: any;
  num: number;
  randNum: number;
  str: string;
  first_name: string;



  constructor(private _httpService: HttpService) {
  }
  ngOnInit() {
    this.getTasksFromService();
    this.getExamplesFromService();
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      // console.log('Got our data!', data);
      this.tasks = data;
    });
  }
    getExamplesFromService() {
      this.num = 7;
      this.randNum = Math.floor( (Math.random() * 2) + 1);
      this.str = 'Hello Angular Developer!';
      this.first_name = 'Alpha';
  }
  getTasks() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data['data'];
  });






















  // onButtonClick(): void {
  //   console.log(`Click event is working`);
  // }
  // onButtonClick(getTasksFromService): void {
  // for (task in getTasksFromService) {
  //   console.
  // }
  // }
  // onButtonClickParams(arr: array): void {
  //   console.log(`${this.tasks}`);
  // }
  // onButtonClick(event) {
  //   console.log(`Click event is working, event:`, event);
// }


// lrwxr-xr-x  1 root         admin        38 Feb 16 17:28 ng -> ../lib/node_modules/angular-cli/bin/ng
