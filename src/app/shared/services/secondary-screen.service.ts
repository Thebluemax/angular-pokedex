import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondaryScreenService {

  private msj:string = '';

  private changeTextScreen = new Subject<string>();
  public textToChange  = this.changeTextScreen.asObservable();

  constructor() { }

  public setText(msj:string) {
    this.msj = msj;
  }

  private getText():string {
    return this.msj;
  }

  processText(){
    this.changeTextScreen.next(this.msj);
  }
}
