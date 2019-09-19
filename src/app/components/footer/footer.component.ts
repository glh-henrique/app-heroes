import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { RequestService } from 'src/shared/services/request.service';
import { ShowLoaderService } from 'src/shared/services/show-loader.service';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  date: Date;

  objPagination = {
    length: '-',
    pageSize: 10,
  };

  constructor(
    private request: RequestService,
    private loaderService: ShowLoaderService,
    private dataService: DataService
  ) {
    this.date = new Date();
  }
  ngOnInit() {
    this.getItens();
  }

  changeItens($event) {
    this.loaderService.isLoading(true);
    this.getItens($event);
  }

  private getItens(event?) {
    this.request
      .getHeroes(event)
      .pipe(
        finalize(() => {
          this.loaderService.isLoading(false);
        })
      )
      .subscribe((x: any) => {
        this.objPagination.length = x.data.total;
        this.objPagination.pageSize = x.data.limit;
        this.dataService.listData(x.data.results);
      });
  }
}
