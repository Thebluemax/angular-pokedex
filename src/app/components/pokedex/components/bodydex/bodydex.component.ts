import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PokebaseService } from "../../../../core/services/pokebase.service";
import { SecondaryScreenService } from '@components/pokedex/services/secondary-screen.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from "../../components/control-footer/redux/screen.actions";
import * as actionsUi from "../../../../shared/ui.actions";

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
  public viewList: any;
  public title: string;
  public href: string = "";
  public pagination: string;
  public page: number = 0;
  public rows: number = 20;

  @Input() pageName: string;
  @Input() api: string

  constructor(private pkService: PokebaseService,
    private router: Router,
    private sScree: SecondaryScreenService,
    private store: Store<AppState>

  ) { }

  ngOnInit() {
    this.limit = 2000;
    this.title = this.href = this.router.url;
    this.getItems(this.page, this.limit);

  }

  ngOnDestroy(): void {
    this.store.dispatch(actions.write({ message: '-- -- --' }))
  }

  getItems(offset: number, limit: number) {
    this.store.dispatch(actionsUi.isLoading());
    //this.isLoading = true;
    this.pkService.getItems(this.api, offset, limit).subscribe(data => {
      this.itemCount = data.count;
      this.list = data.results;
      this.listSort();
    // this.isLoading = false;
      this.buildList(offset);
    this.store.dispatch(actionsUi.stopLoading());
    });
  }
  listSort() {
    this.list.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  buildList(page: number) {
    this.previous = page * this.rows;
    this.next = this.previous + this.rows;
    this.viewList = this.list.slice(this.previous, this.next);
    this.pagination = this.paginateText();
    this.store.dispatch(actions.write({ message: this.pagination }))

    // this.sScree.setText(this.pagination);
  }
  nextPage() {
    this.page = this.page * this.rows < this.itemCount ? this.page + 1 : this.itemCount - 1;
    this.buildList(this.page);
  }
  previusPge(){
    this.page = this.page > 0 ? this.page - 1 : 0;
    this.buildList(this.page);
  }

  paginateText() {
    return `Items List: <br> ${this.previous + 1}-${this.next}/${this.itemCount}`;
  }

  itemDetall(id: string) {

    let url = '/pokedex/' + this.pageName.toLocaleLowerCase() + '/' + id;

    this.router.navigate([url]);
  }
}
