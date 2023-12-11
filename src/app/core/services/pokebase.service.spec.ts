import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {PokebaseService} from "./pokebase.service";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "src/environments/environment";
import {Pokemon} from "src/app/core/models/pokemon";

const pokemons = [
  {
    name: "picachu",
    power: "electricity"
  }, {
    mane: "bulba",
    power: "plant"
  }
];

let service: PokebaseService;
let httpMock: HttpTestingController;

describe("PokebaseService", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule], providers: [PokebaseService]});
    service = TestBed.inject(PokebaseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("getItems() must form URL and get results", () => {
    let rute = "rute";
    let page = 1;
    let limit = 10;
    const urlToTest = environment.apiUrl + `${rute}/?offset=${page}&limit=${limit}`;
    service.getItems(rute, page, limit).subscribe((resp) => {
      expect(resp).toEqual(pokemons)
    });
    const request = httpMock.expectOne(urlToTest);
    request.flush(pokemons)
  });

});
