import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { RequestService } from 'src/shared/services/request.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  date: Date;
  showProgress: boolean;

  objPagination = {
    length: '-',
    pageSize: '-',
  };

  constructor(private request: RequestService) {
    this.date = new Date();
  }
  ngOnInit() {
    this.getItens();
  }

  changeItens($event) {
    this.getItens($event);
  }

  private getItens(event?) {
    this.request
      .getHeroes(event)
      .pipe(
        finalize(() => {
          this.showProgress = false;
        })
      )
      .subscribe((x: any) => {
        this.objPagination.length = x.data.total;
        this.objPagination.pageSize = x.data.limit;
      });
  }
}
