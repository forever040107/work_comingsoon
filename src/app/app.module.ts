import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { SwiperModule } from 'angular2-useful-swiper';
import { AppComponent }   from './app.component';
 
@NgModule({
  imports: [
    BrowserModule,
    SwiperModule
  ],
  declarations: [
      AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
