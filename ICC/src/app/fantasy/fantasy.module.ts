import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FantasyRoutingModule } from './fantasy-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FantasyRoutingModule
  ],
  exports:[
    LoginComponent,
  RegisterComponent,
  ResetPasswordComponent,
  ]
})
export class FantasyModule { }
