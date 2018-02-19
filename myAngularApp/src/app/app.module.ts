import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service'; // register service named 'http' by adding import { HttpService } from
// './http.service' within app.module.ts
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

// const routes: Routes = [
//   { path: '', component: showAll },
//   [ pathL '', pathMath:]
// ]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [HttpService], // registering service named HttpService by adding it to our array of providers
  bootstrap: [AppComponent]
})
export class AppModule { }
