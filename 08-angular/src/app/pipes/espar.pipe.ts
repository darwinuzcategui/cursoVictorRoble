import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
    name: 'espar'
})
export class EsparPipe implements PipeTransform {
    
    transform(value: any){
        let espar= " no es par";
        if(value % 2 == 0){
            espar= " si es par";
        }
        return 'La comision es: '+value+ espar;
    }
}