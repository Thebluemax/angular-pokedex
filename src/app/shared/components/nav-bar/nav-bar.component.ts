import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject, pipe, interval  } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'pkd-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  openInput: boolean;
  term$: string;
  subject: Subject<string> = new Subject();
  @Input() pagination: boolean;
  @Output() searchTerm : EventEmitter<string> = new EventEmitter();
  @Output() next : EventEmitter<boolean> = new EventEmitter();
  @Output() back : EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    this.subject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(term => {this.searchTerm.emit(term)});
  }

  nextPage(){
    this.next.emit(true);
  }
 previusPge(){
  this.back.emit(true);
 }

 search(){
  this.openInput = !this.openInput;
  if (!this.openInput) {
    this.subject.next('');
  }
 }
 searchTermAction(event){
   this.subject.next(event.target.value);
 }
}
