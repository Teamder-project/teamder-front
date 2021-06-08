import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './_components/header/header.component';
import { LeagueOfLegendsComponent } from './pages/league-of-legends/league-of-legends.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RocketLeagueComponent } from './pages/rocket-league/rocket-league.component';
import { ApexLegendsComponent } from './pages/apex-legends/apex-legends.component';
import { CounterStrikeComponent } from './pages/counter-strike/counter-strike.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SwipeComponent } from './pages/swipe/swipe.component';
import { NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import { ChatListComponent } from './pages/chat-list/chat-list.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FriendsComponent } from './_components/friends/friends.component';
import { LoginComponent } from './_components/login/login.component';


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
    SwipeComponent,
    ChatListComponent,
    FriendsComponent,
    SignInComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    HammerModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerGestureConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
