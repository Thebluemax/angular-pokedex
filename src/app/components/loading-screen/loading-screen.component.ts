import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  @Input() loading:boolean;
  

  loadMsj:string = '';

  constructor() { }

  ngOnInit() {

    let timeOut = setInterval(()=>{

        this.loadMsj += '* ';
        if (!this.loading) {
          clearInterval(timeOut);
          this.loadMsj = '';
        }
    }, 100);

  }

}
