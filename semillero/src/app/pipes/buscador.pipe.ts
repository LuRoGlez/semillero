import { Pipe, PipeTransform } from '@angular/core';
import { Plague } from '../models/plague.model';


@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(plagas : Plague[], texto: string): Plague[] {

    if (texto.length === 0) {
      return plagas;
    }

    texto = texto.toLocaleLowerCase();

    return plagas.filter(plaga => {
      return plaga.name.toLocaleLowerCase().includes(texto);
    });
  
  }

}
