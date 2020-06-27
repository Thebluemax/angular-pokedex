import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss']
})
export class BerriesComponent implements OnInit {

  pageName: string = 'Berries';
  apiUrl: string = 'berry';

  constructor() { }

  ngOnInit() {
  }

}
