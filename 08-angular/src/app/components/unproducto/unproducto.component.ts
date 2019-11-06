import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../../services/producto.service';

import { Producto } from '../../models/producto';
import { Global } from '../../services/global';

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
      let id = params['id'];
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
}
