import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-scaner',
  templateUrl: './header-scaner.component.html',
  styleUrls: ['./header-scaner.component.scss'],
  animations: [
    trigger('scannerState',[
      state('false',style({boxShadow:'none'})),
      state('true',style( {boxShadow: '0px 0px 40px 25px rgba(75,200,180,.9)'})),
      transition('true => false', [animate('3s',keyframes(
        [
          style({boxShadow: '0px 0px 40px 25px rgba(75,200,180,.7)'}),
          style({boxShadow: '0px 0px 50px 18px rgba(75,200,180,.1)'}),
          style({boxShadow: '0px 0px 30px 10px rgba(75,200,180,.7)'}),
          style({boxShadow: '0px 0px 40px 25px rgba(75,250,210,.1)'}),
          style({boxShadow: '0px 0px 50px 18px rgba(75,200,180,.9)'}),
          style({boxShadow: '0px 0px 30px 10px rgba(75,200,180,.0)'}),
        ]
      ))]),
    ])
  ],
})
export class HeaderScanerComponent implements OnInit {

  @Input() scannerState;

  constructor( private route:Router ) { }

  ngOnInit() {
  }

  goScan(){
    this.scannerState = true;
    let pokemon = Math.ceil(Math.random()*950);
    this.route.navigate(['/pokemon', pokemon]);
  }
  
  animEnd($event){
    console.log('end',this.scannerState);
    this.scannerState = false;
  }
}
