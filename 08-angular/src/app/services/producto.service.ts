import { Injectable  } from "@angular/core";
import {HttpClient,HttpHeaders  } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";
import { Global } from "./global";

@Injectable()
export class ProductoService{
    public url:string;

    constructor(
        private  _http: HttpClient
    ){
        this.url = Global.url;

    }
    pruebas(){
        return 'Soy el Servicio de articulo .....!!!';
    }
    // creao mi metodo para sacar mi productos
    getProductos():Observable<any> {
        return this._http.get(this.url+'productos');

    }

}