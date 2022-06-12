import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pkd-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent implements OnInit {

  pageName: string = '';
  apiUrl: string = '';

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let nameId = this.route.snapshot.paramMap.get("category");
    this.pageName = nameId;
    this.apiUrl = nameId;
  }


}
