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
  create(producto): Observable<any> {
    const params = JSON.stringify(producto); // con esta intrucion lo convierto un objeto json string

    // una variable para configurar la diferente cabeceras
    const headers = new HttpHeaders().set('Content-TYpe', 'application/json');
    return this._http.post(this.url + 'save', params, { headers });
  }
  actulizar(id, producto): Observable<any> {
    const params = JSON.stringify(producto);
    const headers = new HttpHeaders().set('Content-TYpe', 'application/json');
    return this._http.put(this.url + 'producto/' + id, params, {
      headers
    });
  }
  delete(id: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-TYpe', 'application/json');
    return this._http.delete(this.url + 'producto/' + id, {headers});
  }
}
