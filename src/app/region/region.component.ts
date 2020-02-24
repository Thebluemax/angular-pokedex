import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokebaseService } from '../shared/services/pokebase.service';
import { SecondaryScreenService } from '../shared/services/secondary-screen.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  private region:any;
  private sprite:string;

  constructor(private route:ActivatedRoute, private pokeService:PokebaseService, private sScreen:SecondaryScreenService
    , private  _location:Location) { 
  
  }
  init(){
    //this.sprite = this.region.sprites.front_default;
    this.sScreen.setText(`Region#${this.region.id}`);
  }
  goBack(){
    this._location.back();
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.pokeService.getDetallRegion(id).subscribe(data => {

      this.region = data
      this.init();
    });
  }


}
