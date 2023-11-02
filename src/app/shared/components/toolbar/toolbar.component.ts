import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pkd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  pageName: string = 'Page Name';
  openInput: boolean = false;
  @Input() set name(name: string) {this.pageName = name;}
  @Output() searchTerm:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  searchTermAction($event) {
    this.searchTerm.emit($event.target.value);
  }

  openSearch() {
    this.openInput = !this.openInput;
  }
}
