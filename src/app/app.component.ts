import { Component, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { BodydexComponent } from './bodydex/bodydex.component';
import { SecondaryScreenService } from './shared/services/secondary-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'poke';
  private screenSecondary: string = '-- --'

  constructor (private screenservice:SecondaryScreenService){
      this.screenservice.textToChange.subscribe(msj => this.screenSecondary = msj);
  }

  onChanges(): void {
  
    
  }
}
