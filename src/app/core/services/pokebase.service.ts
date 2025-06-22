import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http'
import { observable, Observable } from 'rxjs';
import { ItemsService } from '../interfaces/items-service'

@Injectable({
  providedIn: 'root'
})
export class PokebaseService implements ItemsService{

  private endpointUrl:string = '';
  private urlApi:string  = '';
/**
 * Servicio para la conexión a la api de pokeApi
 * @param {HttpClient} Cliente http
 */
  constructor( private http: HttpClient) {}
/**
 *
 * @param url url del recurso
 * @param offset puntero de posición en la lista
 * @param limit cantidad de entradas
 */
  getItems(url:string ,offset:number, limit:number): Observable<any> {
    this.endpointUrl = `${url}/?offset=${offset}&limit=${limit}`;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }

  getDetallItems(category: string,id:any): Observable<any> {
    this.endpointUrl = `${category}/${id}`;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }

  getDetallRegion(id:any): Observable<any> {
    this.endpointUrl = 'region/'+id;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }
  getDetallpokemon(id:any): Observable<any> {
    this.endpointUrl = 'pokemon/'+id;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }
  getDetallLocation(id:any): Observable<any> {
    this.endpointUrl = 'location/'+id;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }
  getDetallBerry(id:any): Observable<any> {
    this.endpointUrl = 'berry/'+id;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }

  getInfoItem( url:string ) {
    return this.http.get(url);
  }
}
