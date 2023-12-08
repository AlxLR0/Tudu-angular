import { Component,inject, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.service';

@Component({
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  tareas: Tarea[]=[];

  //Injectar servicio por metodo de angular (v.14 en adelante) espera la ruta
  private tareaService:TareaService=inject(TareaService);

  //opcion2: Injectar servicio por contructor, funciona para venores 14, para todas las versiones
  constructor(private tareaServiceCons:TareaService){
  }

  ngOnInit(): void {
   this.obtenertareas();
  }
  obtenertareas(){
    this.tareas=this.tareaService.getTareas();
  }

  catchOnStatusChange(){
  this.obtenertareas();
  }
}
