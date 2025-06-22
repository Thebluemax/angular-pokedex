import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * @component
 * @author Maximiliano Fernández <thebluemax13@gmail.com>
 * @fileoverview This component displays detailed information about a specific item in the pokemon world.
 * @since 2025-06-22
 * 
 * This Component is part of the PokeDex application and is used to show detailed information about a specific item, including its name, category, sprite, and additional details.
 * It allows users to toggle the visibility of more information about the item.
 * 
 * 
 * @description This component displays detailed information about a specific item in the pokemon world.
 * 
 * @class ItemComponent
 * 
 * @example
 * <pkd-item-page [item]="item"></pkd-item-page>
 * 
 * @license GNU General Public License v3.0
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
  name:string = '';
  category:string = '';
  sprite:string = '';
  isLoading: boolean=false;
  seeMore: boolean = false;
  
  @Input() item: any;

  showMore(){
    this.seeMore = !this.seeMore;
  }

  getTranslation(code: string){
    const text = this.item.flavor_text_entries.find((text: any) => text.language.name === code);

    return text ? text.text : '--';
  }
}
