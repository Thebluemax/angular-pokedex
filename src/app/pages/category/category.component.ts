import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokebaseService } from 'src/app/core/services/pokebase.service';
import * as actions from "../../components/pokedex/components/control-footer/redux/screen.actions";
import * as actionsUi from "@shared/ui.actions";

/**
 * @component
 * @author Maximiliano Fernández <thebluemax13@gmail.com>
 * @fileoverview Main base catgory component for displaying detailed information about a specific category item in the Pokédex Api.
 * @since 2025-06-21
 * 
 * @description
 * This component is responsible for fetching and displaying detailed information about a specific category item in the Pokédex API.
 * It uses the PokebaseService to retrieve data based on the category and ID provided in the route parameters.
 * The component initializes with a loading state and updates the UI with the fetched data, including the item's name, sprite, and flavor text.
 * It also provides a method to navigate back to the previous category view.
/**
 * 
 * @class CategoryComponent
 * @implements {OnInit}
 * 
 * @example
 * <pkd-category-section></pkd-category-section>
 * 
 * ### Dependencies
 * @dependencies
 * - @angular/core
 * - @angular/router
 * - @ngrx/store
 * - src/app/core/services/pokebase.service
 * - src/app/shared/ui.actions 
 */
@Component({
  selector: 'pkd-category-section',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  title:string  = '';
  titleId:string  = '';
  item: any;
  name:string = '';
  category:string | null = '';
  id:string | null  = '';
  sprite:string = '';
  isLoading: boolean=false;
  seeMore: boolean = false;

  constructor(private pokeBase:PokebaseService,
               private route:ActivatedRoute,
               private router: Router,
               private store: Store) {
    this.item = null;
   }

  ngOnInit() {
    this.store.dispatch(actions.write({ message: '-- -- --' }))
    this.category = this.route.snapshot.paramMap.get("category");
    this.id = this.route.snapshot.paramMap.get("id");
    this.store.dispatch(actionsUi.isLoading());
    this.getDetail()
  }

  getDetail(){
    if(!this.category || !this.id) {
      return;
    }
    this.pokeBase.getDetallItems(this.category,this.id).subscribe(data => {
      this.title = this.category ? this.category : '';
      this.titleId = this.id  ? this.id : '';
      this.item = data;
      this.init();
      this.store.dispatch(actionsUi.stopLoading());
    });
  }

  init(){
    this.name = this.item !== null ? this.item.name : '......' ;
    this.sprite = this.item.sprites ? this.item.sprites.default : '#';
    this.store.dispatch(actions.write({ message: `${this.item.id}#${this.item.name}` }))
  }

  goBack(){
    this.router.navigate(['/pokedex/' + this.category]);
  }

  getTranslation(code: string){
    const text = this.item.flavor_text_entries.find((text:any) => text.language.name === code);

    return text ? text.text : '--';
  }

}
