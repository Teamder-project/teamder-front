import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/header/header.component';
import { LeagueOfLegendsComponent } from './pages/league-of-legends/league-of-legends.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RocketLeagueComponent } from './pages/rocket-league/rocket-league.component';
import { ApexLegendsComponent } from './pages/apex-legends/apex-legends.component';
import { CounterStrikeComponent } from './pages/counter-strike/counter-strike.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SwipeJuComponent } from './pages/swipe-ju/swipe-ju.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeagueOfLegendsComponent,
    HomeComponent,
    RocketLeagueComponent,
    ApexLegendsComponent,
    CounterStrikeComponent,
    AboutUsComponent,
    SwipeJuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
