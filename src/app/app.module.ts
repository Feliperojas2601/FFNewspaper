import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import { HumansComponent } from './humans/humans.component';
import {ImageModule} from 'primeng/image';
import { HealthComponent } from './health/health.component';
import { DeppComponent } from './depp/depp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    EntertainmentComponent,
    HumansComponent,
    HealthComponent,
    DeppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    RadioButtonModule, 
    ButtonModule, 
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
