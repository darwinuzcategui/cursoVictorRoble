import { Component, OnInit,DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit, DoCheck,OnDestroy {
  

  // TODO: Ciclo de vida del los componentes
  public titulo: string;
  
  constructor() {
    this.titulo = "Componente de Vendedor";
    console.log("CONTRUCTOR LANAZADO!!!, Se ejecuto o lanzo el contructor");
    // solo para asignar valor inicial a las propiedades
    // o pre Cargar algo
   }

  ngOnInit() {
    // iniciar los componentes
    // carga de componente
    console.log("componente iniciado !!! ,envento Oninit lanzado o ejecutado");
    
  }

  // se ejecuta simpre que hay un tipo de cambio
  ngDoCheck(){
    console.log("DOCHECK LANZADO !!!");
   
  }


  cambiarTitulo(){
    console.log("Se lanzo el metodo cambiarTitulo");
    
    this.titulo = "El Titulo ha sido Cambiado!!!";
  }

  // avisa que se va destruir el componente
  // ante de eliminar la instancia del componente se ejecuta oNdestroy()
  ngOnDestroy(): void {
    console.log("EL COMPONENTE SE VA ELIMINAR");
    
  }

  


}
