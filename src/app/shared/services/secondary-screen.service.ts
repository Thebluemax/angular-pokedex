import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondaryScreenService {

  private msj:string = '';

  private changeTextScreen = new BehaviorSubject('####');
  public textToChange  = this.changeTextScreen.asObservable();

  constructor() { }

  public setText(msj:string) {
    this.msj = msj;
    this.processText();
  }

  private getText():string {
    return this.msj;
  }

  processText(){
    this.changeTextScreen.next(this.msj);
  }
}
