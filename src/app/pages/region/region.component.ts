import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'
import { Region } from "@core/models/region"
import { AppState } from 'src/app/app.reducer'

/**
 * @component
 * @author Maximiliano Fernández <thebluemax13@gmail.com>
 * @fileoverview This is the page component for displaying a Pokémon region.
 * @since 2025-06-22
 * 
 * This component is responsible for displaying the details of a Pokémon region,
 * including its name, map, and related locations. It retrieves the region data
 * from the store and initializes the component with the relevant information.
 * 
 * @description This component is responsible for displaying the details of a Pokémon region.
 * 
 * @class RegionComponent
 * @implements {OnInit}
 * 
 * @example
 * <pkd-region-screen></pkd-region-screen>
 * 
 * ### Dependencies
 * @dependencies
 * @license GNU General Public License v3.0
 */
@Component({
  selector: 'pkd-region-screen',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {
  loading: boolean = false;
  region: Region | null
  title: string = '';

  maps = [
    {
      name: 'johto',
      map: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Map_Pok%C3%A9mon_Red_%26_Blue_FR.png'
    },
    {
      name: 'kalos',
      map: 'https://cdn.bulbagarden.net/upload/b/b1/Kalos_Pok%C3%A9dex_map.png'
    },
    {
      name: 'hoenn',
      map: 'https://prowiki.info/images/c/c5/Hoenn.png'
    },
    {
      name: 'sinnoh',
      map: 'https://prowiki.info/images/a/ac/Sinnoh.png'
    },
    {
      name: 'unova',
      map: 'https://archives.bulbagarden.net/media/upload/b/b4/Unova.png'
    },
    {
      name: 'kanto',
      map: 'https://prowiki.info/images/7/78/Kanto.png'
    },
    {
      name: 'alola',
      map: 'https://cdn.bulbagarden.net/upload/6/6c/Alola.png'
    }];

  mapImg: string = '';
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.region = null

  }

  /* init() {
     this.store.dispatch(actionsScreen
       .write({message: `${this.region.id}#${this.region.name}`}));
     this.title = '/Regions/' + this.region.name;
     this.mapImg = this.getMap(this.region.name);
   }
 
   goBack() {
     this._location.back();
   }
 
   ngOnInit() {
     let id = this.route.snapshot.paramMap.get("id");
     this.store.dispatch(actionsUi.isLoading());
     this.pokeService.getDetallRegion(id).subscribe(data => {
       this.region = { ...data };
       this.init();
       this.store.dispatch(actionsUi.stopLoading());
     });
   }
 }*/
  getMap(region: string) {
    let mapImg = this.maps.find(r => r.name === region)
    return mapImg ? mapImg.map : 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Map_Pok%C3%A9mon_Red_%26_Blue_FR.png'
  }
  detailLocation(location: string) {
    this.router.navigate([`location/${location}`])
  }
}
