import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeWorkModule} from './home-work/home-work.module';
import { HomeWorkComponent } from './home-work/home-work.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeWorkComponent
  ],
  imports: [
    BrowserModule,
    HomeWorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
