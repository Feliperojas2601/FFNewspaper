import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
