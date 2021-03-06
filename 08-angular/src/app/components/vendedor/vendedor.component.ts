import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { log } from 'util';
import { Vendedor } from '../../models/vendedor';
import { VendedorService } from '../../services/vendedor.service'

@Component({
  selector: 'vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
  providers: [VendedorService]
})
export class VendedorComponent implements OnInit, DoCheck, OnDestroy {
  // TODO: Ciclo de vida del los componentes
  public titulo: string;
  public vendedores: Vendedor[];
  public marcadoFavorito: Vendedor[];
  public fecha: any;


  constructor(
    private _vendedorService: VendedorService
  ) {
    
    this.titulo = 'Componente de Vendedor';
    this.vendedores = this._vendedorService.getVendedor(); 
    this.fecha = new Date(2019,6,27);
    console.log('CONTRUCTOR LANAZADO!!!, Se ejecuto o lanzo el contructor');
    // solo para asignar valor inicial a las propiedades
    // o pre Cargar algo
  }

  ngOnInit() {
    // iniciar los componentes
    // carga de componente
    console.log(this.vendedores);
    console.log('componente iniciado !!! ,envento Oninit lanzado o ejecutado');
    console.log(this._vendedorService.holaDrawin());
  }

  // se ejecuta simpre que hay un tipo de cambio
  ngDoCheck() {
    console.log('DOCHECK LANZADO !!!');
  }

  cambiarTitulo() {
    console.log('Se lanzo el metodo cambiarTitulo');

    this.titulo = 'El Titulo ha sido Cambiado!!!';
  }

  // avisa que se va destruir el componente
  // ante de eliminar la instancia del componente se ejecuta oNdestroy()
  ngOnDestroy(): void {
    console.log('EL COMPONENTE SE VA ELIMINAR');
  }
  /*
  mostrar(event){
   console.log(event)
   // this.marcadoFavorito = event.vendedor;
   // console.log(this.marcadoFavorito);

  }
  */

  eventoenElPadreParaMostra(event){
    this.marcadoFavorito=event.vendedor;
    console.log(this.marcadoFavorito);
    

  }
}
