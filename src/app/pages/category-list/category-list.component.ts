import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '@core/models/pokemon'
import { PokebaseService } from '@core/services/pokebase.service'
import { SecondaryScreenService } from '@core/services/secondary-screen.service'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/app.reducer'
import * as actions from "../../components/pokedex/components/control-footer/redux/screen.actions";
import * as actionsUi from "@shared/ui.actions";

@Component({
  selector: 'pkd-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent implements OnInit, OnDestroy {

  pageName: string = '';
  apiUrl: string = '';
  
  ngOnInit() {
    console.log(this.route.snapshot)
    let nameId = this.route.snapshot.paramMap.get("category");
    this.pageName = nameId ? nameId : '';
    this.apiUrl = nameId ? nameId : '';
    this.limit = 2000;
    this.title = this.href = this.router.url;
    this.getItems(this.page, this.limit);
  }
  public isLoading = false;
  public itemCount: number = 0;
  public previous: number = 0;
  public next: number = 0;
  public list: Pokemon[] = []; // or appropriate interface
  public viewList: Pokemon[] = []; // or appropriate interface any;
  public title:string = '';
  public href: string = "";
  public pagination:string = '';
  public page: number = 0;
  public limit: number = 1000;
  public rows: number = 500;
  
  constructor(private pkService: PokebaseService,
    private route: ActivatedRoute,
    private router: Router,
    private sScree: SecondaryScreenService,
    private store: Store<{ ui: AppState }> ,

  ) { 
  }


  ngOnDestroy(): void {
    this.store.dispatch(actions.write({ message: '-- -- --' }))
  }

  /**
   * @param number offset 
   * @param number limit 
   */
  getItems(offset: number, limit: number) {
    this.store.dispatch(actionsUi.isLoading());
    console.log('getItems', this.apiUrl, offset, limit);
    this.pkService.getItems(this.apiUrl, offset, limit).subscribe(data => {
      this.itemCount = data.count;
      this.list = data.results;
      this.listSort();
      this.buildList(offset);
      this.store.dispatch(actionsUi.stopLoading());
    });
  }
  listSort() {
    if (!this.list || !Array.isArray(this.list)) {
    this.list = [];
    return;
  }
    this.list.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }

  buildList(page: number) {
    this.previous = page * this.rows;
    this.next = this.previous + this.rows;
    this.viewList = this.list;//.slice(this.previous, this.next);
    this.pagination = this.paginateText();
    this.store.dispatch(actions.write({ message: this.pagination }))
  }

  nextPage() {
    this.page = this.page * this.rows < this.itemCount ? this.page + 1 : this.page;
    this.buildList(this.page);
  }

  previousPage() {
    this.page = this.page > 0 ? this.page - 1 : 0;
    this.buildList(this.page);
  
  }

  paginateText() {
    return `Items List: <br> ${this.previous + 1}-${this.next}/${this.itemCount}`;
  }
  paginateTextAndSearch() {
    return `Items List: <br> ${this.previous + 1}-${this.next}/${this.viewList.length}(${this.itemCount})`;
  }

  itemDetall(id: string) {

    let url = '/pokedex/' + this.apiUrl + '/' + id;

    this.router.navigate([url]);
  }

  filter(event: string) {
    this.viewList = this.list.filter( (term: any) => {
      return term.name.toLowerCase().includes(event);
    });
    this.pagination = this.paginateTextAndSearch();
    this.store.dispatch(actions.write({ message: this.pagination }))
  }
}

