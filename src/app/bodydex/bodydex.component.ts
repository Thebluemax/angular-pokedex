import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { PokebaseService } from "../shared/services/pokebase.service";
import { SecondaryScreenService } from "../shared/services/secondary-screen.service";
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



  constructor(private pkService: PokebaseService,
               private router: Router,
  private sScree:SecondaryScreenService
  ) { }
  ngOnInit() {
    this.limit = 20;
    this.href = this.router.url;
    this.getItems(0, this.limit);

  }
  ngOnDestroy(): void {
    this.sScree.setText('-- --');
    
  }

  getItems(offset: number, limit: number) {
    this.pkService.getItems(this.href, offset, limit).subscribe(data => {
      this.itemCount = data.count;
      this.previous = offset;
      this.next = offset + this.limit;
      this.pagination = this.paginateText();
      this.list = data.results;
      this.sScree.setText(this.pagination);
    });
  }
  paginateText(){
    return `${this.previous}-${this.next-1}/${this.itemCount}`;
  }
  selectedItem($event) {
    console.log($event);
  }
}
