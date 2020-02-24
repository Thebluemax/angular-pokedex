import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: any, operation:string): any {
    let words:string[] = value.split('-');
    let name:string = '';
    words.forEach(element => {
      name += element.charAt(0).toUpperCase() + element.slice(1);
      name += ' ';
    });
    return name;
  }

}
