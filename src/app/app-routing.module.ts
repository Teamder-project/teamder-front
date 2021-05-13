import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ApexLegendsComponent } from './pages/apex-legends/apex-legends.component';
import { CounterStrikeComponent } from './pages/counter-strike/counter-strike.component';
import { HomeComponent } from './pages/home/home.component';
import { LeagueOfLegendsComponent } from './pages/league-of-legends/league-of-legends.component';
import { RocketLeagueComponent } from './pages/rocket-league/rocket-league.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'league-of-legends', component: LeagueOfLegendsComponent},
  { path: 'rocket-league', component: RocketLeagueComponent},
  { path: 'apex-legends', component: ApexLegendsComponent},
  { path: 'counter-strike', component: CounterStrikeComponent},
  { path: 'about-us', component : AboutUsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
