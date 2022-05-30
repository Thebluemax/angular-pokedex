import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  loadMsj:string = '';
  timeOut: any;

  loading:boolean;
constructor(
  private store: Store<AppState>
){

}
  ngOnInit() {
    const subs$ = this.store.select('ui')
    .subscribe( ({isLoading})=> {console.log(isLoading);
      this.loading = isLoading});

    this.timeOut = setInterval(()=>{
        this.loadMsj += '* ';
        if (!this.loading) {
          clearInterval(this.timeOut);
          this.loadMsj = '';
        }
    }, 100);

  }
}
