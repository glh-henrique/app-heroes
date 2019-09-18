import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { environmentKey } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getHash() {
    return this.generateHash();
  }

  private generateHash() {
    return Md5.hashStr(`${environmentKey.TS}${environmentKey.PRIVATE_KEY}${environmentKey.API_KEY}`);
  }
}
