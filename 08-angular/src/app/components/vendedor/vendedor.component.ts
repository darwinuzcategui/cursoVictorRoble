import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { log } from 'util';

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
        codigo: '001',
        nombre: 'Pedro Perez',
        imagen:
          'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201909/02/00100114109424____6__516x640.jpg'
      },
      {
        codigo: '002',
        nombre: 'Maria Davila',
        imagen:
          'https://conceptodefinicion.de/wp-content/uploads/2015/03/hombre.jpg'
      },
      {
        codigo: '008',
        nombre: 'Juan Leonida',
        imagen:
          'https://conceptodefinicion.de/wp-content/uploads/2015/03/hombre.jpg'
      },
      // tslint:disable-next-line: max-line-length
      {
        codigo: '003',
        nombre: 'Maria Martinez',
        imagen:
          'https://ichef.bbci.co.uk/news/624/cpsprodpb/3178/production/_90946621_thinkstockphotos-463360345.jpg'
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
