import { Injectable } from '@angular/core';
import { environment } from "./../../../environments/environment";
import { HttpClient } from '@angular/common/http'
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokebaseService {

  private endpointUrl:string;
  private urlApi:string;
/**
 * http Servicio que conecta conla api de pokemon api
 * @param {HttpClient} Cliente http
 */
  constructor( private http: HttpClient) {

  }
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
  getDetallItems(id): Observable<any> {
    this.endpointUrl = '/item/'+id;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }
  getDetallRegion(id): Observable<any> {
    this.endpointUrl = '/region/'+id;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }
  getDetallpokemon(id): Observable<any> {
    this.endpointUrl = '/pokemon/'+id;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }
  getDetallLocation(id): Observable<any> {
    this.endpointUrl = '/location/'+id;
    this.urlApi = environment.apiUrl+this.endpointUrl;
    return this.http.get(this.urlApi);
  }
}