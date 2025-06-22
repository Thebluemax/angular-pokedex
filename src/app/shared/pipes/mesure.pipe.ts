import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesure'
})
export class MesurePipe implements PipeTransform {

  transform(value: string | number | undefined, unit:string):string  {
    if (value === undefined || value === null) {
      return '';
    }
    let val =(typeof value !== "number") ? parseInt(value) : value;
    let convert:number = val/10.0;
    return (unit == 'k')?`${convert} kg.`:`${convert} mts.`;
  }

}
