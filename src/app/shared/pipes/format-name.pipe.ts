import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: any, operation: string): string {
    switch (operation) {
      case 'T':
        return value.replace('-', ' ').toUpperCase();
        break;
      case 'I':
        return this.capitalizeWord(value);
      case 'P':
        return this.toPlural(value);
      default:
        return value;
    }

  }

  capitalizeWord(value: string) {
    let words: string[] = value.split('-');
    words = words.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    });
    return words.join(' ');
  }

  toPlural(value: string) :string {
    let pWord: string = '';
    const yLeter = /(y)$/;
    pWord = value.replace(yLeter,'ies');

    const nLeter = /([nm])$/;
    pWord = pWord.replace(nLeter, '$1s');
    return pWord;
  }
}
