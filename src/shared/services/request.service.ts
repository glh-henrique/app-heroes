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
    pageIndex: 1,
    pageSize: 10,
    previousPageIndex: 1,
  };

  constructor(private http: HttpClient, private hash: TokenService) {}

  getHeroes(params = this.ObjParams) {
    const paramsObj = `ts=${environmentKey.TS}&apikey=${
      environmentKey.API_KEY
    }&hash=${this.hash.getHash()}&offset=${params.pageIndex}&limit=${
      params.pageSize
    }`;
    return this.http.get(`${this.objurl.urlHeroes}${paramsObj}`);
  }
}
