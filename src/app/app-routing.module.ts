import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HumansComponent } from './humans/humans.component';
import { HealthComponent } from './health/health.component';
import { DeppComponent } from './depp/depp.component';
import { HowtoComponent } from './howto/howto.component';
import { WhatComponent } from './what/what.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'entertainment', 
    component: EntertainmentComponent
  },
  {
    path: 'humans', 
    component: HumansComponent
  },
  {
    path: 'health', 
    component: HealthComponent
  },
  {
    path: 'howto', 
    component: HowtoComponent
  },
  {
    path: 'depp', 
    component: DeppComponent
  },
  {
    path: 'what',
    component: WhatComponent
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
