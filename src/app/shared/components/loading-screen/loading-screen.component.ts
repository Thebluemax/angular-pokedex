import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

/**
 * @component
 * @author Maximiliano Fernández <thebluemax13@gmail.com>
 * @fileoverview A simple loading screen component that displays a loading message with asterisks.
 * @since 2025-06-21
 * 
 * This component is used to indicate that a process is ongoing, such as data fetching or processing.
 * It listens to the application's state to determine when to show or hide the loading message.
 * The loading message is dynamically updated with asterisks to give a visual indication of activity.
 *
 * @description Brief description of the component
 * 
 * @class LoadingScreenComponent
 * @implements {OnInit}
 * 
 * @example
 * <pkd-loading-screen></pkd-loading-screen>
 * 
 * ### Dependencies
 * @dependencies
 * - @angular/core
 * - @ngrx/store
 * - src/app/app.reducer
 * 
 * 
 * @license GNU General Public License v3.0
 */
@Component({
  selector: 'pkd-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  loadMsj:string = '';
  timeOut: any;
  loading:boolean = false;

constructor(
  private store: Store<{ ui:any, screen:any }>
) { }

  ngOnInit() {
    const subs$ = this.store.select('ui')
    .subscribe( ({isLoading})=> {
      this.loading = isLoading
      this.activeLoading();
    });

  }

  activeLoading(){
    this.timeOut = setInterval(()=>{
      this.loadMsj += '* ';
      if (!this.loading) {
        clearInterval(this.timeOut);
        this.timeOut = null;
        this.loadMsj = '';
      }
  }, 100);

  }

  onDestroy(): void {
    if(this.timeOut)
      clearInterval(this.timeOut);
  }
}
