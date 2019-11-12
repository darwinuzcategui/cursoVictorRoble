import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../../services/producto.service';

import { Producto } from '../../models/producto';
import { Global } from '../../services/global';
import swal from 'sweetalert';

@Component({
  selector: 'app-unproducto',
  templateUrl: './unproducto.component.html',
  styleUrls: ['./unproducto.component.css'],
  providers: [ProductoService]
})
export class UnproductoComponent implements OnInit {
  public producto: Producto;
  public url: string;

  constructor(
    private productoService: ProductoService,
    private rutaActiva: ActivatedRoute,
    private ruta: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this.rutaActiva.params.subscribe(params => {
      const id = params.id;
      this.productoService.getUnproducto(id).subscribe(
        response => {
          if (response.producto) {
            this.producto = response.producto;
            console.log(response);
          } else {
            this.ruta.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          this.ruta.navigate(['/home']);
        }
      );
    });
  }

  delete(id) {
    swal({
      title: 'Esta Seguro?',
      text: 'Una vez Borrado el producto No podra Recuperlo!',
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true
    })
    .then(willDelete => {
      if (willDelete) {
        this.productoService.delete(id).subscribe(
          response => {
            swal('El Producto ha sido eliminado!', {
              icon: 'success'
            });
            this.ruta.navigate(['/blog']);
          },
          error => {
            console.log(error);
            this.ruta.navigate(['/blog']);
          }
        );
      } else {
        swal('Tranquilo nada se ha eliminado !');
      }
    });
  }
}
