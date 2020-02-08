import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PokebaseService } from "../shared/services/pokebase.service";

@Component({
  selector: 'app-bodydex',
  templateUrl: './bodydex.component.html',
  styleUrls: ['./bodydex.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BodydexComponent implements OnInit {
  private itemCount:number;
  private next:string;
  private previous:string;
  private list:any;
  private pagination:string;


  constructor( private pkService: PokebaseService) { }

  ngOnInit() {

    this.pkService.getItems().subscribe(data => {
      console.log(data);
      this.itemCount = data.count;
      this.next = data.next;
      this.previous = data.previous;
      this.pagination = (data.previous == null)? '0' : '20';
      this.list = data.results;
    });
  }

  selectedItem($event) {
    console.log($event);
  }
}
