import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { PokebaseService } from "../shared/services/pokebase.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodydex',
  templateUrl: './bodydex.component.html',
  styleUrls: ['./bodydex.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BodydexComponent implements OnInit {


  private itemCount: number;
  private previous: number;
  private next: number;
  private limit: number;
  private list: any;
  private reference: number = 20;
  public href: string = "";
  public pagination:string;


  constructor(private pkService: PokebaseService, private router: Router) { }
  ngOnInit() {
    this.limit = 20;
    this.href = this.router.url;
    this.getItems(0, this.limit);
  }

  getItems(offset: number, limit: number) {
    this.pkService.getItems(this.href, offset, limit).subscribe(data => {
      console.log('data');
      this.itemCount = data.count;
      this.previous = offset;
      this.next = offset + this.limit;
      this.pagination = (data.previous == null) ? '0' : '20';
      this.list = data.results;
    });
  }
  paginateText(){
    
  }
  selectedItem($event) {
    console.log($event);
  }
}
