import { Component, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { BodydexComponent } from './bodydex/bodydex.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild(BodydexComponent,{ static:true }) bodydexComponent: BodydexComponent;
  title = 'poke';

  onChanges(): void {
  
    console.log(this.bodydexComponent.paginateText);
    
  }
}
