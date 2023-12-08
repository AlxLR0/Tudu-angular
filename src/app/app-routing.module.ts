import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './home/pages/landing/landing.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrerComponent } from './auth/pages/registrer/registrer.component';
import { RecoveryComponent } from './auth/pages/recovery/recovery.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: "auth",
    //component: LoginComponent
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: "tareas",
    //component: LoginComponent
    loadChildren: () => import('./tareas/tareas.module').then( m => m.TareasModule )
  },
  {
    path: "usuario",
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfileModule )
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
