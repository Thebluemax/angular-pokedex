import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PokebaseService } from '../../shared/services/pokebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from "../../shared/interfaces/item";
import { SecondaryScreenService } from '../../shared/services/secondary-screen.service';
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
  sprite: string;
  isLoading: boolean=false;

  constructor(private pokeBase:PokebaseService,
               private route:ActivatedRoute,
               private sScreen:SecondaryScreenService,
               private  _location:Location,
               private router: Router) {
    this.item = null;
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.isLoading = true;
    this.pokeBase.getDetallItems(id).subscribe(data => {
      this.title = `/Items/${id}`;
      this.item = data;
      this.init();
      this.isLoading = false;
    });
  }
  init(){
    this.name = this.item !== null ? this.item.name : '......' ;
    this.sprite = this.item.sprites.default;
    this.sScreen.setText(`${this.item.id}#${this.item.name}`);
  }
  goBack(){
    this._location.back();
  }
}
