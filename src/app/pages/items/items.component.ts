import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  
  pageName: string = 'Items';
  apiUrl: string = 'item';

  constructor() { }

  ngOnInit() {
  }

}
