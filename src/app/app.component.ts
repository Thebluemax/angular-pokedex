import { Component, ViewChild, AfterViewInit, OnChanges, Input } from '@angular/core';
import { BodydexComponent } from './bodydex/bodydex.component';
import { SecondaryScreenService } from './shared/services/secondary-screen.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('scannerState',[
      state('false',style({boxShadow: 'none'})),
      state('true',style({boxShadow: 'none'})),
      transition('* => true', [animate('3s',keyframes(
        [
          style({boxShadow: '0px 0px 40px 25px rgba(75,200,180,.7)'}),  
          style({boxShadow: '0px 0px 50px 18px rgba(75,200,180,.9)'}),
          style({boxShadow: '0px 0px 30px 10px rgba(75,200,180,.7)'}),
          style({boxShadow: '0px 0px 40px 25px rgba(75,250,210,.1)'}),  
          style({boxShadow: '0px 0px 50px 18px rgba(75,200,180,.9)'}),
          style({boxShadow: '0px 0px 30px 10px rgba(75,200,180,.7)'}),
        ]
      ))]),
    ])
  ],
})
export class AppComponent {
  
  title = 'poke';
  screenSecondary: string = '-- --';
  @Input() scannerState;
  constructor (private screenservice:SecondaryScreenService, private route:Router){
      this.screenservice.textToChange.subscribe(msj => this.screenSecondary = msj);
  }

  onChanges(): void {
  
    
  }
  goScan(){
    this.scannerState = (this.scannerState)?false:true;
    let pokemon = Math.ceil(Math.random()*950);
    this.route.navigate(['/pokemon', pokemon]);
  }
  animEnd($event){
    console.log('end',this.scannerState);
    this.scannerState = false;
  }
}
