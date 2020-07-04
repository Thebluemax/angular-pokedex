import { Component, OnInit, Inject, Input } from '@angular/core';
import { PokebaseService } from '../../../shared/services/pokebase.service';


@Component({
  selector: 'app-info-dialog-component',
  templateUrl: './info-dialog-component.component.html',
  styleUrls: ['./info-dialog-component.component.scss']
})
export class InfoDialogComponent implements OnInit{

  @Input() data:any;
 // url: string;
  dataItem:any[] = [];
  name:string;

  constructor(
    private pokeService: PokebaseService) {

      
     // this.url = data.url;

  }
ngOnInit(){
  //this.getinfo();
}

  getinfo() {
    this.pokeService.getInfoItem(this.data.url).subscribe((data:any) => {
      console.log(data);
      this.dataItem = data.berries;
      this.name = data.name;
    });
  }

  close() {
    
  }

}
