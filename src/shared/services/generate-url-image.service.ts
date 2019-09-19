import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateUrlImageService {

  constructor() { }

  mountUrlImg(thumb) {
    return `${thumb.path}.${thumb.extension}`;
  }
}
