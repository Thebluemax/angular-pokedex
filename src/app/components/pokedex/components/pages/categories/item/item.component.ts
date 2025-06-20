import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Component para los objetos del mundo pokemon
 */
@Component({
  selector: 'pkd-item-page',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent  {

  title:string = '';
  titleId:string = '';
  @Input() item: any;
  name:string = '';
  category:string = '';
  sprite:string = '';
  isLoading: boolean=false;
  seeMore: boolean = false;

  showMore(){
    this.seeMore = !this.seeMore;
  }

  getTranslation(code: string){
    const text = this.item.flavor_text_entries.find((text: any) => text.language.name === code);

    return text ? text.text : '--';
  }
}
