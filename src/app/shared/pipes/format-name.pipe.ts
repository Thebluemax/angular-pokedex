import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: any, operation: string): string {
    let stringValue: string = '';
    switch (operation) {
      case 'T':
        stringValue = value.replace('-', ' ').toUpperCase();
        break;
      case 'I':
        stringValue = this.capitalizeWord(value);
        break;
      case 'P':
        stringValue = this.toPlural(value);
        break;
      default:
        stringValue = value;
        break;
    }
    return stringValue;

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
