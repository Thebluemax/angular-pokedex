import { Component, OnInit, Inject, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { PokebaseService } from '../../../../../../core/services/pokebase.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({

  templateUrl: './info-dialog-component.component.html',
  styleUrls: ['./info-dialog-component.component.scss']
})
export class InfoDialogComponent implements OnInit{

 //s @Input() data:any;
 // url: string;
  dataItem:any[] = [];
  name:string;
  typeName: string;

  @Output() public emitValue:EventEmitter<boolean> = new EventEmitter();

  constructor(
    private pokeService: PokebaseService,
    public router:Router
    ) { }

  setType(typeName: string){
    this.typeName = typeName;
  }

  getInfo(url) {
    this.pokeService.getInfoItem(url).subscribe((data:any) => {
      this.dataItem = data.berries;
      this.name = data.name;
    });
  }
  goToPage(name){
    const route = `/berries/${name}`;
    this.router.navigate([route]);
    this.close();
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
