import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistrerComponent } from './pages/registrer/registrer.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrerComponent,
    RecoveryComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
