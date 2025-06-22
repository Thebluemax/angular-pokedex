import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PokebaseService } from "@core/services/pokebase.service";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from "../../components/control-footer/redux/screen.actions";
import { SecondaryScreenService } from '@core/services/secondary-screen.service';
import * as actionsUi from "@shared/ui.actions";
import { Pokemon } from '@core/models/pokemon'; // Adjust the import path as necessary

/**
 *
 * @component
 * @author Your Name
 * @version 1.0
 * @since 2023-10-01
 * 
 * This component is responsible for displaying a list of Pokémon items.
 * It fetches data from the PokebaseService and manages pagination.
 * It also handles filtering and navigation through the list. 
 * 
 * 
 * 
 * @description
 * The BodydexComponent is designed to display a list of Pokémon items fetched from the PokebaseService.
 * It supports pagination, filtering, and navigation to detailed views of individual Pokémon.
 * The component uses Angular's dependency injection to access services and manage state.
 * It also integrates with NgRx for state management, allowing for a reactive approach to data handling.      
 * 
 * @example
 * <pkd-bodylist [pageName]="'pokedex'" [api]="'pokemon'"></pkd-bodylist>
 * 
 * @ngrx
 * @ngrx/store
 * @ngrx/effects
 * @ngrx/entity 
 * @ngrx/router-store
 * @ngrx/component-store
 * 
 * ### Dependencies
 * @dependencies
 * - @angular/core
 * - @angular/router
 * - @ngrx/store
 * - @core/services/pokebase.service
 * - @components/pokedex/services/secondary-screen.service
 * - @shared/ui.actions
 * - @core/models/pokemon
 * @core/models/app-state
 * 

 *       
 */
@Component({
  selector: 'pkd-bodylist',
  templateUrl: './bodydex.component.html',
  styleUrls: ['./bodydex.component.scss'],
})

export class BodydexComponent implements OnInit, OnDestroy {

  public isLoading = false;
  public itemCount: number = 0;
  public previous: number = 0;
  public next: number = 0;
  public limit: number = 0;
    public list: Pokemon[] = []; // or appropriate interface
  public viewList: Pokemon[] = []; // or appropriate interface any;
  public title:string = '';
  public href: string = "";
  public pagination:string = '';
  public page: number = 0;
  public rows: number = 500;

  @Input() pageName:string = '';
  @Input() api: string = ''

  constructor(private pkService: PokebaseService,
    private router: Router,
    private sScree: SecondaryScreenService,
    private store: Store<{ ui: AppState }> ,

  ) { }

  ngOnInit() {
    this.limit = 2000;
    this.title = this.href = this.router.url;
    this.getItems(this.page, this.limit);

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
    this.pkService.getItems(this.api, offset, limit).subscribe(data => {
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

    let url = '/pokedex/' + this.api + '/' + id;

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
