import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductoService]
})
export class HomeComponent implements OnInit {
  public titulo: string;
  public productos: Producto[];

  constructor(private _productoService: ProductoService) {
    this.titulo = 'Últimos Articulos';
  }

  ngOnInit() {
    this._productoService.getProductos(true).subscribe(
      response => {
        if (response.productos) {
          this.productos = response.productos;
          console.log(this.productos);
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
