import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { ShowService } from 'src/shared/services/show.service';
import { DataService } from 'src/shared/services/data.service';
import { GenerateUrlImageService } from 'src/shared/services/generate-url-image.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  faCoffee = faPlus;
  showProgress = true;
  arrayHeroes: Array<any>;
  hero: any;

  constructor(
    public generateUrlImageService: GenerateUrlImageService,
    public dialog: MatDialog,
    private loaderService: ShowService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.loaderService.carregando$.subscribe((x: boolean) => {
      this.showProgress = x;
    });

    this.dataService.data$.subscribe((x: any) => {
      this.arrayHeroes = new Array<any>();
      this.arrayHeroes = x;
    });
  }

  getDetails(hero) {
    this.hero = hero;
    this.openDialog();
  }

  openDialog() {
    this.dialog.closeAll();
    this.dialog.open(PopupComponent, {
      width: '80%',
      maxWidth: '660px',
      data: this.hero,
    });
  }
}
