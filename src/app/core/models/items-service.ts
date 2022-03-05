import { observable, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
  description: string;
  done: boolean;
}

@Injectable()
export abstract class ItemsService {

abstract  getItems(url:string ,offset:number, limit:number): Observable<any> ;
abstract  getDetallItems(id): Observable<any> ;
abstract  getDetallRegion(id): Observable<any> ;
abstract  getDetallpokemon(id): Observable<any> ;
abstract  getDetallLocation(id): Observable<any> ;
abstract  getDetallBerry(id): Observable<any> ;
abstract  getInfoItem( url ) ;
}
