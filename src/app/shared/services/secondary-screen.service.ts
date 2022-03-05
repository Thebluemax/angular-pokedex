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
    this.changeTextScreen.next(this.msj);
  }

  public getText():string {
    return this.msj;
  }
}
