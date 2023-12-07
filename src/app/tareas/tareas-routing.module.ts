import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrerComponent } from '../auth/pages/registrer/registrer.component';
import { ListaComponent } from './pages/lista/lista.component';
import { RegistroTareasComponent } from './pages/registro-tareas/registro-tareas.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'registro',
        component: RegistroTareasComponent
      },
      {
        path: 'lista',
        component: ListaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
