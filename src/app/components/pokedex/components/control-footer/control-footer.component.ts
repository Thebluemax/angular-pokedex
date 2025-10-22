import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { State, Store } from '@ngrx/store';

import * as actions from "./redux/screen.actions";
import { SecondaryScreenService } from '@core/services/secondary-screen.service';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'pkd-control-footer',
  templateUrl: './control-footer.component.html',
  styleUrls: ['./control-footer.component.scss']
})
export class ControlFooterComponent
  implements OnInit {
  location: Location;
  screenMessage: Subscription = new Subscription();
  screenSecondary: string = '-- --';
  constructor(private _location: Location,
    //private screenservice: SecondaryScreenService
    private store: Store<{ ui:any, screen:any }>,
  ) {
    this.location = _location;
  }

  ngOnInit() {
    this.store.select('screen')
    .subscribe( message => {
      this.screenSecondary = message.message;
    })
    this.store.dispatch(actions.write( {message:'Menú Pokedex'} ))
  }

  goScan() { }

  navigate(direction: 'up' | 'down') {
    const event = new CustomEvent('pokedex-navigate', { detail: { direction } });
    window.dispatchEvent(event);
  }

  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.navigate('up');
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.navigate('down');
    }
  }

  goBack() {
    this.location.back();
  }
  goForward() {
    this.location.forward();
  }
}
