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
  public vendedores: Vendedor[];
  public marcadoFavorito: Vendedor[];


  constructor() {
    this.titulo = 'Componente de Vendedor';
    this.vendedores = [
      // tslint:disable-next-line: max-line-length
      new Vendedor("001","Jose Antonio Marin",5,"https://conceptodefinicion.de/wp-content/uploads/2015/03/hombre.jpg"),
      new Vendedor ("002","Pedro Perez",8,"https://t1.uc.ltmcdn.com/images/5/3/2/img_cuales_son_las_prestaciones_laborales_de_un_trabajador_20235_600.jpg"),
      new Vendedor("003","Maria Davila",20,"https://uy.emedemujer.com/wp-content/uploads/sites/4/2016/02/Mujer-de-negocios-exitosa.jpg")

/*      {
        comision: 15,
        codigo: '002',
        nombre: 'Maria Davila',
        imagen: 'https://t1.uc.ltmcdn.com/images/5/3/2/img_cuales_son_las_prestaciones_laborales_de_un_trabajador_20235_600.jpg'
      },
      {
        comision: 16,
        codigo: '008',
        nombre: 'Juan Leonida',
        imagen: 'https://previews.123rf.com/images/alexutemov/alexutemov1604/alexutemov160401355/54834487-ilustraci%C3%B3n-de-dibujos-animados-car%C3%A1cter-trabajador-hombre-de-reparaci%C3%B3n-trabajador-elegante-ilustraci%C3%B3n-person.jpg'
      },
      // tslint:disable-next-line: max-line-length
      {
        comision: 20,
        codigo: '003',
        nombre: 'Maria Martinez',
        imagen:
          'https://uy.emedemujer.com/wp-content/uploads/sites/4/2016/02/Mujer-de-negocios-exitosa.jpg'
      }
      */
    ];
    console.log('CONTRUCTOR LANAZADO!!!, Se ejecuto o lanzo el contructor');
    // solo para asignar valor inicial a las propiedades
    // o pre Cargar algo
  }

  ngOnInit() {
    // iniciar los componentes
    // carga de componente
   // console.log(this.vendedores);
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
