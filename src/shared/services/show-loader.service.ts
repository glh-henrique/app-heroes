import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowLoaderService {
  private subject: BehaviorSubject<any>;
  carregando$: Observable<any>;
  constructor() {
    this.subject = new BehaviorSubject(Boolean);
    this.carregando$ = this.subject.asObservable();
  }

  isLoading(loading: boolean) {
    this.subject.next(loading);
  }
}
