import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pkd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent  {

  pageName: string = 'Page Name';
  openInput: boolean = false;
  @Input() set name(name: string) {this.pageName = name;}
  @Input() showSearchBtn: boolean = true;
  @Output() searchTerm:EventEmitter<string> = new EventEmitter<string>();
  searchTermAction(event: KeyboardEvent) {
    const $event = event as any;
    this.searchTerm.emit($event.target.value);
  }

  openSearch() {
    this.openInput = !this.openInput;
  }
}
