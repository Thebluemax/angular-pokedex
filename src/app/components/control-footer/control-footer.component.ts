import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SecondaryScreenService } from '../../shared/services/secondary-screen.service';

@Component({
  selector: 'app-control-footer',
  templateUrl: './control-footer.component.html',
  styleUrls: ['./control-footer.component.scss']
})
export class ControlFooterComponent
  implements OnInit {

  screenSecondary: string = '-- --';
  constructor(private _location: Location,
    private screenservice: SecondaryScreenService) { }

  ngOnInit() {
    this.screenservice.textToChange.subscribe(msj => this.screenSecondary = msj);
  }

  goScan() { }


  goBack() {
    this._location.back();
  }
  goForward() {
    this._location.forward();
  }
}
