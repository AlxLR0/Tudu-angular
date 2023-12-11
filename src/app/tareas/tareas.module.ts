import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { ListaComponent } from './pages/lista/lista.component';
import { AppComponent } from './pages/app/app.component';
import { RegistroTareasComponent } from './pages/registro-tareas/registro-tareas.component';
import { TareaCardComponent } from './components/tarea-card/tarea-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaComponent,
    AppComponent,
    RegistroTareasComponent,
    TareaCardComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    ReactiveFormsModule
  ]
})
export class TareasModule { }
