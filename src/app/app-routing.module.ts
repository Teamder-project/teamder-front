import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApexLegendsComponent } from './pages/apex-legends/apex-legends.component';
import { ChatListComponent } from './pages/chat-list/chat-list.component';
import { CounterStrikeComponent } from './pages/counter-strike/counter-strike.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { LeagueOfLegendsComponent } from './pages/league-of-legends/league-of-legends.component';
import { RocketLeagueComponent } from './pages/rocket-league/rocket-league.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SwipeComponent } from './pages/swipe/swipe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'league-of-legends', component: LeagueOfLegendsComponent},
  { path: 'rocket-league', component: RocketLeagueComponent},
  { path: 'apex-legends', component: ApexLegendsComponent},
  { path: 'counter-strike', component: CounterStrikeComponent},
  { path: 'about-us', component : AboutUsComponent},
  { path: 'sign-in', component : SignInComponent},
  { path: 'swipe', component : SwipeComponent},
  { path: 'chat-list', component : ChatListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
