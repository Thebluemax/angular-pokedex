import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokebaseService } from "../../../../core/services/pokebase.service";
import { SecondaryScreenService } from '@components/pokedex/services/secondary-screen.service';

@Component({
  selector: 'app-bodydex',
  templateUrl: './bodydex.component.html',
  styleUrls: ['./bodydex.component.scss'],
})
export class BodydexComponent implements OnInit {

  public isLoading = false;
  public itemCount: number;
  public previous: number;
  public next: number;
  public limit: number;
  public list: any;
  public title: string;
  public href: string = "";
  public pagination: string;

  @Input() pageName: string;
  @Input() api: string

  constructor(private pkService: PokebaseService,
    private router: Router,
    private sScree: SecondaryScreenService
  ) { }

  ngOnInit() {
    this.limit = 30;
    this.title = this.href = this.router.url;
    this.getItems(0, this.limit);

  }

  ngOnDestroy(): void {
    this.sScree.setText('-- --');
  }

  getItems(offset: number, limit: number) {
    this.isLoading = true;
     this.pkService.getItems(this.api, offset, limit).subscribe(data => {
       this.itemCount = data.count;
       this.list = data.results;
       this.isLoading = false;
       this.initList(offset);
     });
  }

  initList(offset: number) {
    this.previous = offset - this.limit;
    this.next = (this.limit > this.itemCount) ? this.itemCount : offset + this.limit;
    this.pagination = this.paginateText();
    this.sScree.setText(this.pagination);
  }
  paginateText() {
    return `${this.previous + this.limit}-${this.next - 1}/${this.itemCount}`;
  }

  itemDetall(id: string) {

    let url = '/pokedex/' + this.pageName.toLocaleLowerCase() + '/' + id;

    this.router.navigate([url]);
  }
}