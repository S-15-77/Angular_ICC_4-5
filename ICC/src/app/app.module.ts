import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    ScheduleComponent,
    StandingsComponent,
    StatsCurComponent,
    StatsAllComponent,
    HeaderComponent,
    FooterComponent,
    FantasyComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
