import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { RequestService } from 'src/shared/services/request.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  faCoffee = faPlus;
  showProgress = true;

  constructor(public dialog: MatDialog, private request: RequestService) {}

  ngOnInit() {
  }

  openDialog() {
    this.dialog.closeAll();
    this.dialog.open(PopupComponent, {
      width: '80%',
      data: { name: 'asdasdasd', animal: 'asdasdasdasd' },
    });
  }
}
