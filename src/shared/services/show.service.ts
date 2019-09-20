import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private subject: BehaviorSubject<any>;
  private subjectPagination: BehaviorSubject<any>;
  carregando$: Observable<any>;
  pagination$: Observable<any>;
  constructor() {
    this.subject = new BehaviorSubject(Boolean);
    this.carregando$ = this.subject.asObservable();

    this.subjectPagination = new BehaviorSubject(Boolean);
    this.pagination$ = this.subjectPagination.asObservable();
  }

  isLoading(loading: boolean) {
    this.subject.next(loading);
  }

  showPagination(show: boolean){
    this.subjectPagination.next(show);
  }
}
