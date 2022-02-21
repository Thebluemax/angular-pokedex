import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokebaseService } from '../../shared/services/pokebase.service';
import { SecondaryScreenService } from '../../shared/services/secondary-screen.service';
import { Location as LocationRegion } from '../../interfaces/Region';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  loading:boolean;
  location:LocationRegion;
  title:string;
  constructor(
    private route:ActivatedRoute,
     private pokeService:PokebaseService,
      private sScreen:SecondaryScreenService,
       private  _location:Location
       ) { }

    init(){
      //this.sprite = this.region.sprites.front_default;
      console.log(this.loading,this.location);
      this.sScreen.setText(`Loc.#${this.location.id}`);
      this.title = `/locations/${this.location.name}`;
    }
    goBack(){
      this._location.back();
    }
    ngOnInit() {
      this.loading = true;
      let id = this.route.snapshot.paramMap.get("id");
      this.pokeService.getDetallLocation(id).subscribe(data => {

        this.location = {...data};
        this.init();
        this.loading = false;
      });
    }

}
