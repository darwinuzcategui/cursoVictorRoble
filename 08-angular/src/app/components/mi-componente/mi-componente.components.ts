import { Component } from "@angular/core";
import { log } from 'util';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.components.html',
    // template:`
    //     <h1>{{titulo}}</h1>
    //     <h2>{{year}}</h2>
    //     <p>{{comentario}}</p>
    //     <p>{{sw}}</p>
    // `
})
export class MiComponente{
    
    public titulo: string;
    public comentario:string;
    public year:number;
    public sw:boolean;

    constructor(){
        this.titulo = "Hola soy el titulo desde el atributo";
        this.comentario = "Este es comentario desde mi primer componente";
        this.year = 2020;
        this.sw = true;

        console.log("Componente cargado");
        console.log(this.titulo, this.comentario, this.year);
    }
    ocultarVendedor(){
        this.sw = false;
    }

}