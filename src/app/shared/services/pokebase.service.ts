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
    this.endpointUrl = 'item/';
    this.urlApi = environment.apiUrl+this.endpointUrl;
    console.log(this.urlApi);
  }

  getItems(): Observable<any> {
    return this.http.get(this.urlApi);
  }
}
