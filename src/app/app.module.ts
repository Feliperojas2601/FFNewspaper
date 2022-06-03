import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ImageModule} from 'primeng/image';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HumansComponent } from './humans/humans.component';
import { HealthComponent } from './health/health.component';
import { DeppComponent } from './depp/depp.component';
import { HowtoComponent } from './howto/howto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    EntertainmentComponent,
    HumansComponent,
    HealthComponent,
    DeppComponent,
    HowtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    RadioButtonModule, 
    ButtonModule, 
    ImageModule, 
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
