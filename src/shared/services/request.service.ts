import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environmentKey } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  objurl = {
    urlHeroes: 'https://gateway.marvel.com:443/v1/public/characters?',
  };

  ObjParams = {
    length: 100,
    pageIndex: 0,
    pageSize: 10,
    previousPageIndex: 1,
  };
  securityParams: string;

  constructor(private http: HttpClient, private hash: TokenService) {
    this.securityParams = `ts=${environmentKey.TS}&apikey=${
      environmentKey.API_KEY
    }&hash=${this.hash.getHash()}`;
  }

  getPaginatedHeroes(params = this.ObjParams) {
    if (params.pageIndex > 0) {
      params.pageIndex = params.pageIndex + 9;
    }
    const paginatedParams = `&offset=${params.pageIndex}&limit=${params.pageSize}`;
    return this.http.get(
      `${this.objurl.urlHeroes}${this.securityParams}${paginatedParams}`
    );
  }

  getHeroesFilterbyName(name: string) {
    let param: any;
    if (name !== undefined) {
      param = `nameStartsWith=${name}`;
    } else {
      param = `offset=${this.ObjParams.pageIndex}&limit=${this.ObjParams.pageSize}`;
    }
    return this.http.get(
      `${this.objurl.urlHeroes}&${param}&${this.securityParams}`
    );
  }
}
