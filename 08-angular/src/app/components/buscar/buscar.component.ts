import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
  providers: [ProductoService]
})
export class BuscarComponent implements OnInit {
  public productosEncontrados: Producto[];
  public terminoDeBusqueda: string;

  constructor(
    private rutaActivadas: ActivatedRoute,
    private ruta: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    // recorger los parametros enviados por la url
    this.rutaActivadas.params.subscribe(params => {
      // var buscar = params['termino'];
      const buscar: string = params.termino;
      this.terminoDeBusqueda = buscar ;
      // ahora paso los parametros de busqueda a mi metodo
      // para que ella llame mi backend
      this.productoService.buscar(buscar).subscribe(
        response => {
          // console.log(response.productos);
          if (response.productos) {
            this.productosEncontrados = response.productos;
            console.log(this.productosEncontrados);
          } else {
            this.productosEncontrados = [];
          }
        },
        error => {
          console.log(error);
          this.productosEncontrados = [];
          // this.ruta.navigate(['/home']);
        }
      );

      //  alert(buscar);
    });
  }
}
