import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ProductoService]
})
export class BlogComponent implements OnInit {
  public productos: Producto[];
  public url: string;

  // tslint:disable-next-line: variable-name
  constructor(private _productoService: ProductoService) {
    this.url = Global.url;
    console.log(this.url);
  }

  ngOnInit() {
    console.log(this._productoService.pruebas());
    // pruebando mi peticion http
    this._productoService.getProductos().subscribe(
      response => {
        if (response.productos) {
          this.productos = response.productos;
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
