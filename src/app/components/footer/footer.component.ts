import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { RequestService } from 'src/shared/services/request.service';
import { ShowService } from 'src/shared/services/show.service';
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
  showPagination = true;

  constructor(
    private request: RequestService,
    private loaderService: ShowService,
    private dataService: DataService
  ) {
    this.date = new Date();
  }
  ngOnInit() {
    this.getItens();

    this.loaderService.pagination$.subscribe((x: boolean) => {
      this.showPagination = x;
    });
  }

  changeItens($event) {
    this.loaderService.isLoading(true);
    this.getItens($event);
  }

  private getItens(event?) {
    this.request
      .getPaginatedHeroes(event)
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
