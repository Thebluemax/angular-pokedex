import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  loadMsj:string = '';
  timeOut: any;

  @Input() loading:boolean;

  ngOnInit() {

    this.timeOut = setInterval(()=>{
        this.loadMsj += '* ';
        if (!this.loading) {
          clearInterval(this.timeOut);
          this.loadMsj = '';
        }
    }, 100);

  }
}
