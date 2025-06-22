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
abstract  getDetallItems(category:string,id: string): Observable<any> ;
abstract  getDetallRegion(id: any): Observable<any> ;
abstract  getDetallpokemon(id: any): Observable<any> ;
abstract  getDetallLocation(id: any): Observable<any> ;
abstract  getDetallBerry(id: any): Observable<any> ;
abstract  getInfoItem( url: string ) : Observable<any> ;
}
