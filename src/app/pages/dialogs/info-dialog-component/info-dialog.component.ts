import { Component, OnInit, Inject, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { PokebaseService } from '../../../shared/services/pokebase.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({

  templateUrl: './info-dialog-component.component.html',
  styleUrls: ['./info-dialog-component.component.scss']
})
export class InfoDialogComponent implements OnInit{

 //s @Input() data:any;
 // url: string;
  dataItem:any[] = [];
  name:string;

  @Output() public emitValue:EventEmitter<boolean> = new EventEmitter();

  constructor(
    private pokeService: PokebaseService) {


     // this.url = data.url;

  }
ngOnInit(){
  //this.getinfo();
}

  getInfo(url) {
    this.pokeService.getInfoItem(url).subscribe((data:any) => {
      console.log(data);
      this.dataItem = data.berries;
      this.name = data.name;
    });
  }

  close() {
    this.emitValue.next(false);
  }

}

@NgModule({
  declarations: [InfoDialogComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
class InfoDialogModule { }
