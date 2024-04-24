import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalId',
  standalone: true
})
export class NationalIdPipe implements PipeTransform {

  transform(idnumber:string , datapart:string): string {
    const birthYear=parseInt(idnumber.substring(1,2),10);
    const birthMonth=parseInt(idnumber.substring(3,2),10);
    const birthDay=parseInt(idnumber.substring(5,2),10);
    switch(datapart)
    {
      case 'YY':
        return (birthYear<10?'0':'')+birthYear;
      case 'MM':
        return (birthMonth<10? '0':'')+birthMonth;
        case 'DD':
          return (birthDay<10? '0':'')+birthDay; 
          case 'FullDate':
        return `${birthDay}-${birthMonth}-${birthYear + 1900}`;
      default:
        return '';
    }
  }
}
