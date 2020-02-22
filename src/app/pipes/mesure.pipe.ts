import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesure'
})
export class MesurePipe implements PipeTransform {

  transform(value: string, unit:string):string  {
    let val = parseInt(value);
    let convert:number = val/10.0;
    
    return (unit == 'k')?`${convert} kg.`:`${convert} mts.`;
  }

}
