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
      this.list = data.results;
      this.initList(offset);
    });
  }
  initList(offset:number){
    this.previous = offset - this.limit;
      this.next = (this.limit > this.itemCount)?this.itemCount: offset + this.limit;
      this.pagination = this.paginateText();
      this.sScree.setText(this.pagination);
  }
  paginateText(){
    return `${this.previous+this.limit}-${this.next-1}/${this.itemCount}`;
  }
  itemDetall(url) {
    let id = url.match(/\/(\d+)\//);
    console.log("",id[1]);
    this.router.navigate([this.href,id[1]]);
  }
}
