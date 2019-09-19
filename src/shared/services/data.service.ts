import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  private subject: BehaviorSubject<any>;
  data$: Observable<any>;
  constructor() {
    this.subject = new BehaviorSubject(this.data);
    this.data$ = this.subject.asObservable();
  }

  listData(data: any) {
    this.subject.next(data);
  }
}
