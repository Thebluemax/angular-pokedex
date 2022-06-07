import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PokebaseService } from '../../../../../core/services/pokebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SecondaryScreenService } from '../../../services/secondary-screen.service';
import { Store } from '@ngrx/store';
import * as actions from "../../control-footer/redux/screen.actions";
import * as actionsUi from "../../../../../shared/ui.actions";
/**
 * Component para los objetos del mundo pokemon
 */
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {

  title:string;
  item: any;
  name: string;
  category: string;
  sprite: string;
  isLoading: boolean=false;

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
    let id = this.route.snapshot.paramMap.get("id");
    this.store.dispatch(actionsUi.isLoading());
    this.pokeBase.getDetallItems(this.category,id).subscribe(data => {
      this.title = `/${this.category}/${id}`;
      this.item = data;
      this.init();
      this.store.dispatch(actionsUi.stopLoading());
    });
  }
  init(){
    this.name = this.item !== null ? this.item.name : '......' ;
    //this.sprite = this.item.sprites.default;
    this.store.dispatch(actions.write({ message: `${this.item.id}#${this.item.name}` }))
  }
  goBack(){
    this._location.back();
  }
}
