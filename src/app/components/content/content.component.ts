import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { ShowLoaderService } from 'src/shared/services/show-loader.service';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  faCoffee = faPlus;
  showProgress = true;
  arrayHeroes: Array<any>;

  constructor(
    public dialog: MatDialog,
    private loaderService: ShowLoaderService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.loaderService.carregando$.subscribe((x: boolean) => {
      this.showProgress = x;
    });

    this.dataService.data$.subscribe((x: any) => {
      this.showProgress = true;
      this.arrayHeroes = x;
    });
  }

  mountUrlImg(thumb) {
    return `${thumb.path}.${thumb.extension}`;
  }

  openDialog() {
    this.dialog.closeAll();
    this.dialog.open(PopupComponent, {
      width: '80%',
      data: { name: 'asdasdasd', animal: 'asdasdasdasd' },
    });
  }
}
