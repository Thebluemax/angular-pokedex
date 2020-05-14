import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokebaseService } from '../../shared/services/pokebase.service';
import { SecondaryScreenService } from '../../shared/services/secondary-screen.service';
import { Location } from '@angular/common';
import { Region } from "../../interfaces/Region";
import { Router } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  loading:boolean;
   region:Region;
   title:string;
   maps=[{name:'johto', map:'https://upload.wikimedia.org/wikipedia/commons/5/5d/Map_Pok%C3%A9mon_Red_%26_Blue_FR.png'}];

  constructor(private route:ActivatedRoute,
            private pokeService:PokebaseService,
            private sScreen:SecondaryScreenService,
            private  _location:Location,
            private router:Router) { 
  this.region = null;
  }
  init(){
    this.sScreen.setText(`${this.region.id}#${this.region.id}`);
    this.title = '/regions/'+this.region.name;
  }
  goBack(){
    this._location.back();
  }
  ngOnInit() {
    this.loading = true;
    let id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.pokeService.getDetallRegion(id).subscribe(data => {

      this.region = {...data};
      this.init();
      this.loading = false;
      console.log(this.loading,this.region);
    });
  }
  itemDetall(url) {
    let id = url.match(/\/(\d+)\//);
    console.log("",id[1]);
    this.router.navigate(['location',id[1]]);
  }
  getMap(region: string) {
    let mapImg = this.maps.find(r => r.name === region);
    console.log(mapImg);
    return mapImg.map;
  }
}
