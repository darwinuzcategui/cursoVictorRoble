import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ProductoService]
})
export class BlogComponent implements OnInit {

  constructor(
    private _productoService: ProductoService
    ){}

  ngOnInit() {
 
 console.log(this._productoService.pruebas());
 // pruebando mi peticion http
 this._productoService.getProductos().subscribe(
   response => {
     console.log(response);

   },
   error => {
     console.log(error);

   }
 );

}

}
