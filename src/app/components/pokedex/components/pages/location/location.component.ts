import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location as LocationRegion } from '../../../../../core/models/region';

@Component({
  selector: 'pkd-region-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  loading:boolean;
  title:string;
  maps = [
    { name: 'johto', map: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Map_Pok%C3%A9mon_Red_%26_Blue_FR.png' },
    { name: 'kalos', map: 'https://cdn.bulbagarden.net/upload/b/b1/Kalos_Pok%C3%A9dex_map.png' },
    { name: 'hoenn', map: 'https://prowiki.info/images/c/c5/Hoenn.png' },
    { name: 'sinnoh', map: 'https://prowiki.info/images/a/ac/Sinnoh.png' },
    { name: 'unova', map: 'https://archives.bulbagarden.net/media/upload/b/b4/Unova.png'},
    { name: 'kanto', map: 'https://prowiki.info/images/7/78/Kanto.png' },
    { name: 'alola', map: 'https://cdn.bulbagarden.net/upload/6/6c/Alola.png' }];


  @Input() location:LocationRegion;
  constructor() { }
    ngOnInit() {

    }

    getMap(region: string) {
      if(!region)
        return 'assets/img/loading.gif';

      const mapImg = this.maps.find(r => r.name === region);
      console.log(mapImg);
      return mapImg.map;
    }
}
