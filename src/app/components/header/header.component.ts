import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/shared/services/request.service';
import { finalize } from 'rxjs/operators';
import { ShowService } from 'src/shared/services/show.service';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private request: RequestService,
    private loaderService: ShowService,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  searchAHero(event) {
    this.loaderService.isLoading(true);
    if (event.target.value.length > 3) {
      this.loaderService.showPagination(false);
      this.searchByName(event.target.value);
    } else {
      this.loaderService.showPagination(true);
      this.searchByName(undefined);
    }
  }

  private searchByName(heroName?) {
    this.request
      .getHeroesFilterbyName(heroName)
      .pipe(
        finalize(() => {
          this.loaderService.isLoading(false);
        })
      )
      .subscribe((x: any) => {
        this.dataService.listData(x.data.results);
      });
  }
}
