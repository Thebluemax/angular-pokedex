import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecondaryScreenService } from '@components/pokedex/services/secondary-screen.service';
import { Store } from '@ngrx/store';
import { PokebaseService } from 'src/app/core/services/pokebase.service';
import * as actions from "../../control-footer/redux/screen.actions";
import * as actionsUi from "../../../../../shared/ui.actions";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  title:string;
  titleId:string;
  item: any;
  name: string;
  category: string;
  id: string;
  sprite: string;
  isLoading: boolean=false;
  seeMore: boolean;

  constructor(private pokeBase:PokebaseService,
               private route:ActivatedRoute,
               private sScreen:SecondaryScreenService,
               private  _location:Location,
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
    this.pokeBase.getDetallItems(this.category,this.id).subscribe(data => {
      this.title = this.category;
      this.titleId = this.id;
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
    const text = this.item.flavor_text_entries.find(text => text.language.name === code);

    return text ? text.text : '--';
  }

}
