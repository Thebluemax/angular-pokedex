import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pkd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  pageName: string = 'Page Name';
  @Input() set name(name: string) {this.pageName = name;}
  constructor() { }

  ngOnInit(): void {
  }

}
