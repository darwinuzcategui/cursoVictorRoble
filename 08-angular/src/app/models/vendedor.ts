export class Vendedor {
  public codigo: string;
  public nombre: string;
  public comision: number;
  public imagen: string;

  // mi contructor
  constructor(codigo, nombre, comision, imagen) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.comision = comision;
    this.imagen = imagen;
  }
}
