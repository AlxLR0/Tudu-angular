import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TareaStatus } from '../../enums/tarea-status.enum';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'tareas-module-tarea-formulario',
  templateUrl: './registro-tareas.component.html',
  styleUrls: ['./registro-tareas.component.css']
})
export class RegistroTareasComponent {
  //para evitar que nos hackien desde el navegador (reactiveForms)

   //declaracion de servicios 
   private fb:FormBuilder=inject(FormBuilder);
   private tareaService:TareaService=inject(TareaService);
   private router:Router=inject(Router);//redireccion

   tareaForm:FormGroup=this.fb.group({
    //id, name, sugiere nombre del campo
    //arreglo de 3 partes: valor inicial de tipo primitivo, arreglo de validadores (sincronos), otra lista de validadores  [asincronos]
    titulo:['',[Validators.required,Validators.minLength(5)]],
    descripcion:['',[Validators.required,Validators.minLength(5)]]
   });

   isFieldValid(field:string): boolean | null {
    return this.tareaForm.controls[field].errors && this.tareaForm.controls[field].touched;
   }

  OnFormSubmit(){
    if (!this.tareaForm.valid){
      this.tareaForm.markAllAsTouched();
     // console.info('El formulario es no válido');
      return;
    }


    const nuevatarea:Tarea={
      status:TareaStatus.PENDIENTE,
      titulo:this.tareaForm.value['titulo'],
      descripcion:this.tareaForm.value['descripcion']
    }

    this.tareaService.agregarTarea(nuevatarea);

    console.log('Valores ingresador', this.tareaForm.value)

    //redirigir a mi lista
    this.router.navigate(['tareas-module',"mi-lista"]);
   // this.router.navigate(['/tareas/mi-lista']);
  }
}
