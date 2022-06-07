import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  pageName: string = 'Items';
  apiUrl: string = 'item';

  constructor(
    private  _location:Location,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let nameId = this.route.snapshot.paramMap.get("category");
    this.pageName = `${nameId.toUpperCase()}S`;
    this.apiUrl = nameId;
  }

}
