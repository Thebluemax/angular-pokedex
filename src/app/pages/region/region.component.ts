import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokebaseService } from '../../core/services/pokebase.service';
import { SecondaryScreenService } from '../../core/services/secondary-screen.service';
import { Location } from '@angular/common';
import { Region } from "../../interfaces/Region";
import { Router } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  loading: boolean;
  region: Region;
  title: string;

  maps = [
    { name: 'johto', map: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Map_Pok%C3%A9mon_Red_%26_Blue_FR.png' },
    { name: 'kalos', map: 'https://cdn.bulbagarden.net/upload/b/b1/Kalos_Pok%C3%A9dex_map.png' },
    { name: 'hoenn', map: 'https://prowiki.info/images/c/c5/Hoenn.png' },
    { name: 'sinnoh', map: 'https://prowiki.info/images/a/ac/Sinnoh.png' },
    { name: 'unova', map: 'https://archives.bulbagarden.net/media/upload/b/b4/Unova.png'},
    { name: 'kanto', map: 'https://prowiki.info/images/7/78/Kanto.png' },
    { name: 'alola', map: 'https://cdn.bulbagarden.net/upload/6/6c/Alola.png' }];

    mapImg: string;
  constructor(private route: ActivatedRoute,
    private pokeService: PokebaseService,
    private sScreen: SecondaryScreenService,
    private _location: Location,
    private router: Router) {
    this.region = null;

  }
  init() {
    this.sScreen.setText(`${this.region.id}#${this.region.name}`);
    this.title = '/Regions/' + this.region.name;
    this.mapImg = this.getMap(this.region.name);
  }
  goBack() {
    this._location.back();
  }
  ngOnInit() {
    this.loading = true;
    let id = this.route.snapshot.paramMap.get("id");
    this.pokeService.getDetallRegion(id).subscribe(data => {

      this.region = { ...data };
      this.init();
      this.loading = false;
    });
  }
  detailLocation(location) {
    //let id = url.match(/\/(\d+)\//);
   // console.log("", id[1]);
    this.router.navigate([`location/${ location }`]);
  }
  getMap(region: string) {
    let mapImg = this.maps.find(r => r.name === region);
    console.log(mapImg);
    return mapImg.map;
  }
}
