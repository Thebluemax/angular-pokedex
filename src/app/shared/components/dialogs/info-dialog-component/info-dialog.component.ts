import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { PokebaseService } from '@core/services/pokebase.service';
import { RouterModule, Router } from '@angular/router';


@Component({

  templateUrl: './info-dialog-component.component.html',
  styleUrls: ['./info-dialog-component.component.scss']
})
export class InfoDialogComponent {

  dataItem:any[] = [];
  name:string = '';
  typeName: string = '';

  @Output() public emitValue:EventEmitter<boolean> = new EventEmitter();

  constructor(
    private pokeService: PokebaseService,
    public router:Router
    ) { }

  setType(typeName: string){
    this.typeName = typeName;
  }

  getInfo(url: string) {
    this.pokeService.getInfoItem(url).subscribe((data:any) => {
      this.dataItem = data.berries;
      this.name = data.name;
    });
  }

  goToPage(name:string){
    const route = `/berries/${name}`;
    this.router.navigate([route]);
    this.close();
  }

  close() {
    this.emitValue.next(false);
  }

}

