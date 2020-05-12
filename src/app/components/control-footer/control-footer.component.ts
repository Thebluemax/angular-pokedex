import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-footer',
  templateUrl: './control-footer.component.html',
  styleUrls: ['./control-footer.component.scss']
})
export class ControlFooterComponent 
implements OnInit {

  screenSecondary: string;
  constructor() { }

  ngOnInit() {
  }
  
  goScan(){}
  
  goBack(){}
  
  goForward(){}
}
