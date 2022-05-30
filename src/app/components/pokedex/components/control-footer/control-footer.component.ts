import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { SecondaryScreenService } from '../../services/secondary-screen.service';
import { State, Store } from '@ngrx/store';
import * as actions from "./redux/screen.actions";
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'pk-control-footer',
  templateUrl: './control-footer.component.html',
  styleUrls: ['./control-footer.component.scss']
})
export class ControlFooterComponent
  implements OnInit {
  screenMessage$: Subscription;
  screenSecondary: string = '-- --';
  constructor(private _location: Location,
    //private screenservice: SecondaryScreenService
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.store.select('screen')
    .subscribe( message => {
      this.screenSecondary = message.message;
    })
    //this.screenservice.textToChange.subscribe(msj => this.screenSecondary = msj);
    this.store.dispatch(actions.write( {message:'Menú Pokedex'} ))
  }

  goScan() { }


  goBack() {
    this._location.back();
  }
  goForward() {
    this._location.forward();
  }
}
