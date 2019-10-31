import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public usuario: any;
  public campo:string;

  constructor() { 
    this.usuario = {
      nombre: '',
      apellidos: '',
      bio:'',
      genero:''
    };
  }

  ngOnInit() {
  }

  onSubmit(){
    alert("Formulario enviado");
    console.log(this.usuario);
  }
  hasDadoClick(){
    alert("Has Dado Click !!!");
  }
  hasSalido(){
    alert("has Salido de escribir en  el  Campo Texto Evento blur !!!");
  }
  
  hasPulsadoTecla(){
    alert("has Pulsado un tecla metodo keyup !!!");
  }

  }

