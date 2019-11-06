import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Global } from './global';

@Injectable()
export class ProductoService {
  public url: string;

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }
  pruebas() {
    return 'Soy el Servicio de articulo .....!!!';
  }
  // creao mi metodo para sacar mi productos
  getProductos(ultimos: any = null): Observable<any> {
    let productos = 'productos';

    if (ultimos != null) {
      productos = 'productos/ultimos';
    }

    return this._http.get(this.url + productos);
  }
  // metodos para sacar un productos del backend
  getUnproducto(produId): Observable<any> {
    return this._http.get(this.url + 'producto/' + produId);
  }
  buscar(terminoBusqueda): Observable<any> {
    return this._http.get(this.url + 'buscar/' + terminoBusqueda);
  }
}
