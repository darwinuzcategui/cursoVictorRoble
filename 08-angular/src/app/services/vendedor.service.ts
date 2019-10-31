import { Injectable } from "@angular/core";
import { Vendedor } from "../models/vendedor";

@Injectable()
export class VendedorService {
  public vendedores: Vendedor[];
  constructor() {
    this.vendedores = [
      new Vendedor(
        "001",
        "Jose Antonio Marin",
        5,
        "https://conceptodefinicion.de/wp-content/uploads/2015/03/hombre.jpg"
      ),
      new Vendedor(
        "002",
        "Pedro Perez",
        8,
        "https://t1.uc.ltmcdn.com/images/5/3/2/img_cuales_son_las_prestaciones_laborales_de_un_trabajador_20235_600.jpg"
      ),
      new Vendedor(
        "003",
        "Maria Davila",
        20,
        "https://uy.emedemujer.com/wp-content/uploads/sites/4/2016/02/Mujer-de-negocios-exitosa.jpg"
      )
    ];
  }
 
  holaDrawin() {
    return "hola darwin desde mi servicio de vendedor";
  }

  getVendedor() {
    return this.vendedores;
}
}
