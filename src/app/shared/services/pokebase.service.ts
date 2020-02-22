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

  constructor( private http: HttpClient) {

    console.log(this.urlApi);
  }

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
}
