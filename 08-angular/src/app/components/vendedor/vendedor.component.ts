import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { log } from 'util';
import { Vendedor } from '../../models/vendedor';

@Component({
  selector: 'vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit, DoCheck, OnDestroy {
  // TODO: Ciclo de vida del los componentes
  public titulo: string;
  public vendedores: Array<any>;

  constructor() {
    this.titulo = 'Componente de Vendedor';
    this.vendedores = [
      // tslint:disable-next-line: max-line-length
      {
        comision: 10,
        codigo: '001',
        nombre: 'Pedro Perez',
        imagen:
          'https://conceptodefinicion.de/wp-content/uploads/2015/03/hombre.jpg'
      },
      {
        comision: 15,
        codigo: '002',
        nombre: 'Maria Davila',
        imagen: 'http://gmdsistemas.com.ve/Imagenes/mision.png'
      },
      {
        comision: 16,
        codigo: '008',
        nombre: 'Juan Leonida',
        imagen: 'http://gmdsistemas.com.ve/Imagenes/vision.png'
      },
      // tslint:disable-next-line: max-line-length
      {
        comision: 20,
        codigo: '003',
        nombre: 'Maria Martinez',
        imagen:
          'https://uy.emedemujer.com/wp-content/uploads/sites/4/2016/02/Mujer-de-negocios-exitosa.jpg'
      }
    ];
    console.log('CONTRUCTOR LANAZADO!!!, Se ejecuto o lanzo el contructor');
    // solo para asignar valor inicial a las propiedades
    // o pre Cargar algo
  }

  ngOnInit() {
    // iniciar los componentes
    // carga de componente
    console.log(this.vendedores);
    console.log('componente iniciado !!! ,envento Oninit lanzado o ejecutado');
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
}
