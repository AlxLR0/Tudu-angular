import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { ListaComponent } from './pages/lista/lista.component';
import { AppComponent } from './pages/app/app.component';
import { RegistroTareasComponent } from './pages/registro-tareas/registro-tareas.component';


@NgModule({
  declarations: [
    ListaComponent,
    AppComponent,
    RegistroTareasComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
