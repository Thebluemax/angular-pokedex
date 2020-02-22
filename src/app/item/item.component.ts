import { Component, OnInit } from '@angular/core';
import { PokebaseService } from '../shared/services/pokebase.service';
import { ActivatedRoute } from '@angular/router';
import { SecondaryScreenService } from '../shared/services/secondary-screen.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item:any;
  name:string;
  sprite:string;
  constructor(private pokeBase:PokebaseService,
               private route:ActivatedRoute,
               private sScreen:SecondaryScreenService,
               private  _location:Location) {
    this.item = null;
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.pokeBase.getDetallItems(id).subscribe(data => {

      this.item = data
      this.init();
    });
  }
  init(){
    this.name = this.item !== null ? this.item.name : '......' ;
    this.sprite = this.item.sprites.default;
    this.sScreen.setText('Item#'+this.item.id);
  }
  goBack(){
    this._location.back();
  }
}
