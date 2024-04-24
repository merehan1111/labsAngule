import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'criteCard',
  standalone: true
})
export class CriteCardPipe implements PipeTransform {

  transform(value: string): string {
    
    const subValue = value.replace(/\D/g, '');

    
    const formattedValue = `${subValue.substring(0, 4)} - ${subValue.substring(4, 8)} - ${subValue.substring(8, 12)} - ${subValue.substring(12, 16)}`;

    return formattedValue;
}
}
