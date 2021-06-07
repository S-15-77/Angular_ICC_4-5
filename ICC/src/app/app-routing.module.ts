import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StandingsComponent } from './standings/standings.component';
import { StatsCurComponent } from './stats-cur/stats-cur.component';
import { StatsAllComponent } from './stats-all/stats-all.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { LoginComponent } from './fantasy/components/login/login.component';
import { RegisterComponent } from './fantasy/components/register/register.component';
import { ResetPasswordComponent } from './fantasy/components/reset-password/reset-password.component';
const routes: Routes = [
  {path : "", pathMatch : 'full' , redirectTo : "home"},

  {path:'home', component:HomeComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'standing',component:StandingsComponent},
  {path:'stat_all',component:StatsAllComponent},
  {path:'stat_cur',component:StatsCurComponent},
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'fantacy',component:FantasyComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'reset',component:ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
