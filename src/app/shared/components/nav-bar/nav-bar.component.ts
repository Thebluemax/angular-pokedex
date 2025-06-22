import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject, pipe, interval  } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

/**
 * @component
 * @author Maximiliano Fernández <thebluemax13@gmail.com>
 * @fileoverview shot file description
 * @since 2025-06-21
 * 
 * MainDescription
 *
 * @description Brief description of the component
 * 
 * @class NavBarComponent
 * @implements {OnInit}
 * 
 * @example
 * <pkd-nav-bar [pagination]="true" (searchTerm)="onSearch($event)" (next)="onNext()" (back)="onBack()"></pkd-nav-bar>
 * 
 * ### Dependencies
 * @dependencies
 * - @angular/core
 * - @angular/common
 * - rxjs
 * 
 * @license GNU General Public License v3.0
 */
@Component({
  selector: 'pkd-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  openInput: boolean = false;
  //term$:string = '';
  subject: Subject<string> = new Subject();
  @Input() pagination: boolean = true;
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
 searchTermAction(event: any){
   this.subject.next(event.target.value);
 }
}
