import { Injectable  } from "@angular/core";
import {HttpClient,HttpHeaders  } from "@angular/common/http";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";

@Injectable()
export class ProductoService{
    constructor(
        private  _http: HttpClient
    ){

    }
    pruebas(){
        return 'Soy el Servicio de articulo !!!';
    }

}